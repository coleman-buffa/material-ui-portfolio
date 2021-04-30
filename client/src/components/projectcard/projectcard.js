import React from 'react';
import { Paper, Grid, ButtonBase, Typography, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, Description, Language } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: "100%",
    // display: "inline-block"
    // maxWidth: 500,
  },
  image: {
    width: 225,
    height: 225,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function ProjectCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid className={classes.paper} container spacing={2}>
          <Grid item xs={12} md={6}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={props.title} src={props.image} />
            </ButtonBase>
            <Typography gutterBottom variant="subtitle1">
              {props.title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item container direction="column" spacing={2}>
              <Grid item>
                <Typography gutterBottom variant="body2">
                  {props.description}
                </Typography>
                <Typography gutterBottom varient="body2" color="textSecondary">
                  {props.skills}
                </Typography>
              </Grid>
              <Grid item direction="row" justify="space-around">
                <Button
                  variant="contained"
                  color="default"
                  size="medium"
                  startIcon={<Language />}
                  href={props.deployed}
                >
                  Live Site
            </Button>
                <Button
                  variant="contained"
                  color="default"
                  size="medium"
                  startIcon={<GitHub />}
                  href={props.repo}
                >
                  Repo
            </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>


  );
}

export default ProjectCard;