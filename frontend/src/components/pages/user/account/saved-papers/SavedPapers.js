import React, { useState, useEffect } from "react";
import "../../../../../App.css";
import "../InfoLayout.css";
import "../../../../website/cards/DefaultPreviewCards.css";
import SavedPaperCard from "./SavedPaperCard";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../../../../../firebase";

async function getBookmarksInBackend(userId) {
  const bookmarksRef = collection(db, "users", userId, "bookmarks");
  const querySnapshot = await getDocs(bookmarksRef);
  return querySnapshot.docs.map((bookmarkDoc) => {
    console.log(bookmarkDoc.id, " => ", bookmarkDoc.data());
    return {
      paperId: bookmarkDoc.id,
      paperTitle: bookmarkDoc.data().paperTitle,
    };
    // doc.data() is never undefined for query doc snapshots
  });
}

function convertBookmarksToCards(bookmarks) {
  return bookmarks.map((bookmark) => {
    // console.log(paperArray[0], " in saved paper ", paperId[1]);
    return (
      <SavedPaperCard
        paperId={bookmark.paperId}
        key={bookmark.paperId}
        paperTitle={bookmark.paperTitle}
        imagePath={"images/img-home.jpg"}
        imageLabel={"Saved Paper"}
      />
    );
  });
}
export default function SavedPapers() {
  const [savedPapersList, setSavedPapersList] = useState([]);
  const userId = "khanh@gmail.com";

  useEffect(() => {
    let mounted = true;
    getBookmarksInBackend(userId).then((bookmarks) => {
      if (mounted) {
        setSavedPapersList(bookmarks);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const savedPaperCards = convertBookmarksToCards(savedPapersList);

  return (
    <div>
      <div>
        <div className="header1">Saved Papers</div>
      </div>
      <div className="info-container">
        <div className="info">
          <div className="cards">
            <div className="cards__container">
              <div className="cards__wrapper">
                <ul className="cards__items">{savedPaperCards}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
