import React from "react";
import { TiBookmark } from "react-icons/ti";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import { IconButton } from "@mui/material";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { useState } from "react";

function addPaperToSavedList() {}

export default function BookmarkButton() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleClick = () => {
    setIsBookmarked(!isBookmarked);
  };
  var myLambda = () => handleClick();
  return (
    // TODO: move style to css
    <IconButton aria-label="delete" color="primary" onClick={myLambda}>
      {isBookmarked ? <BookmarkOutlinedIcon /> : <BookmarkBorderOutlinedIcon />}
    </IconButton>

    // <BookmarkBorderOutlinedIcon />
    // <BookmarkOutlinedIcon />
    // <Button
    //   style={{ color: "#27B0FF" }}
    //   onClick={() => {
    //     savePaper();
    //     addPaperToSavedList();
    //   }}
    // >
    //   {/**TODO: how to use button with icon */}
    //   <IoBookmark />
    // </Button>
  );
}
