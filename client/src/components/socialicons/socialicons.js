import React from 'react';
import Resume from "./colemanbuffa_resume.pdf";
import { LinkedIn, GitHub, Description } from "@material-ui/icons";
import { Grid, IconButton, Button } from "@material-ui/core";

function SocialIcons() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
      <Button
          variant="contained"
          color="default"
          size="medium"
          startIcon={<LinkedIn />}
          href="https://www.linkedin.com/in/coleman-buffa/"
        >
          LinkedIn
            </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="default"
          size="medium"
          startIcon={<GitHub />}
          href="https://github.com/coleman-buffa"
        >
          GitHub
            </Button>

      </Grid>
      <Grid item xs={4}>
      <Button
          variant="contained"
          color="default"
          size="medium"
          startIcon={<Description />}
          href={Resume}
        >
          Resume
            </Button>

      </Grid>
    </Grid>


  );
}

export default SocialIcons;