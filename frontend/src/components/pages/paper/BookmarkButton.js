import React from "react";
import { IconButton } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { useState } from "react";
import { setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { SnackbarProvider, useSnackbar } from "notistack";

function addBookmarkInBackend(paperId, userId) {
  const bookmarkRef = doc(db, "users", userId, "bookmarks", paperId);
  const bookmarkData = {};
  return setDoc(bookmarkRef, bookmarkData)
    .then(() => {
      console.log("Document has been added successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

function removeBookmarkInBackend(paperId, userId) {
  const bookmarkRef = doc(db, "users", userId, "bookmarks", paperId);
  return deleteDoc(bookmarkRef)
    .then(() => {
      console.log("Document has been deleted successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}

async function syncWithBackend(isBookmarked, paperId, userId) {
  let backendResponse;
  if (isBookmarked) {
    backendResponse = removeBookmarkInBackend(paperId, userId);
  } else {
    backendResponse = addBookmarkInBackend(paperId, userId);
  }
  return backendResponse;
}

function updateState(
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

export function BookmarkButtonWithoutSnack({ paperId }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = async () => {
    const userId = "khanh@gmail.com";
    const backendResponse = syncWithBackend(isBookmarked, paperId, userId);
    updateState(
      backendResponse,
      isBookmarked,
      setIsBookmarked,
      enqueueSnackbar
    );
  };

  return (
    <IconButton aria-label="delete" color="primary" onClick={handleClick}>
      {isBookmarked ? <BookmarkOutlinedIcon /> : <BookmarkBorderOutlinedIcon />}
    </IconButton>
  );
}

export default function BookmarkButton({ paperId }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <BookmarkButtonWithoutSnack paperId={paperId} />
    </SnackbarProvider>
  );
}
