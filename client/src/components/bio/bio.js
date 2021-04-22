import React from 'react';
import Photo from "../photo/photo";
import SocialIcons from "../socialicons/socialicons";
import AboutText from "../abouttext/abouttext";

function Bio () {
  return(
    <div>
      <Photo/>
      <SocialIcons/>
      <AboutText/>
    </div>
  );
}

export default Bio;