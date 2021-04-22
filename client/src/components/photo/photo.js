import React from 'react';
import { CardMedia } from "@material-ui/core";
import ProfilePic from "./profilepic.jpg";

function Photo() {
  return (
    <CardMedia
      component="img"
      src={ProfilePic}
      title="Coleman Buffa Portrait"
    />
  );
}

export default Photo;