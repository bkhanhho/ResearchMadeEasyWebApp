import React, { useEffect } from "react";
import { IconButton } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { useState } from "react";
import { setDoc, doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { SnackbarProvider, useSnackbar } from "notistack";

async function addBookmarkInBackend(paperId, userId, paperTitle) {
  const bookmarkRef = doc(db, "users", userId, "bookmarks", paperId);
  const bookmarkData = { paperTitle: paperTitle };
  return setDoc(bookmarkRef, bookmarkData)
    .then(() => {
      console.log("Document has been added successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

async function removeBookmarkInBackend(paperId, userId) {
  const bookmarkRef = doc(db, "users", userId, "bookmarks", paperId);
  return deleteDoc(bookmarkRef)
    .then(() => {
      console.log("Document has been deleted successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

async function syncWithBackend(isBookmarked, paperId, userId, paperTitle) {
  let backendResponse;
  if (isBookmarked) {
    backendResponse = removeBookmarkInBackend(paperId, userId);
  } else {
    backendResponse = addBookmarkInBackend(paperId, userId, paperTitle);
  }
  return backendResponse;
}

async function updateState(
  backendResponse,
  isBookmarked,
  setIsBookmarked,
  enqueueSnackbar
) {
  backendResponse
    .then(() => {
      setIsBookmarked(!isBookmarked);
      enqueueSnackbar(
        isBookmarked
          ? "Paper removed successfully!"
          : "Paper saved successfully!",
        { variant: "success" }
      );
    })
    .catch(() => {
      enqueueSnackbar(
        isBookmarked
          ? "Failed to remove bookmark!"
          : "Failed to save bookmark!",
        { variant: "error" }
      );
    });
}

async function getBookmarkInBackend(paperId, userId) {
  var bookmarkRef = doc(db, "users", userId, "bookmarks", paperId);
  return getDoc(bookmarkRef)
    .then((response) => {
      console.log("Document has been read", response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

async function isPaperBookmarked(paperId, userId) {
  return getBookmarkInBackend(paperId, userId).then((backendResponse) => {
    return backendResponse.exists();
  });
}

export function BookmarkButtonWithoutSnack({ paperId, paperTitle }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const userId = "khanh@gmail.com";

  const handleClick = async () => {
    const backendResponse = syncWithBackend(
      isBookmarked,
      paperId,
      userId,
      paperTitle
    );
    updateState(
      backendResponse,
      isBookmarked,
      setIsBookmarked,
      enqueueSnackbar
    );
  };

  useEffect(() => {
    let mounted = true;
    isPaperBookmarked(paperId, userId).then((bookmarkedInBackend) => {
      if (mounted) {
        setIsBookmarked(bookmarkedInBackend);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <IconButton aria-label="delete" color="primary" onClick={handleClick}>
      {isBookmarked ? <BookmarkOutlinedIcon /> : <BookmarkBorderOutlinedIcon />}
    </IconButton>
  );
}

export default function BookmarkButton({ paperId, paperTitle }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <BookmarkButtonWithoutSnack paperId={paperId} paperTitle={paperTitle} />
    </SnackbarProvider>
  );
}
