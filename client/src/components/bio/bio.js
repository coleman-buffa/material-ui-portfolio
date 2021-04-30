import React from "react";
import { Grid } from "@material-ui/core";
import Photo from "../photo/photo";
import SocialIcons from "../socialicons/socialicons";
import AboutText from "../abouttext/abouttext";

function Bio() {
  return (
    <div>
      <h1>About Me</h1>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12}>
          <Photo />
        </Grid>
        <Grid item xs={6} md={12}>
          <SocialIcons />
        </Grid>
        <Grid item xs={12}>
          <AboutText />
        </Grid>
      </Grid>
    </div>

  );
}

export default Bio;