import React from 'react';
import Skills from "../skills/skills";
import ProjectCard from "../projectcard/projectcard";

function Projects () {

//Logic goes here
//State goes here
  //State to track all project objects fetched from DB array of objects
  //State to track all unique skills pulled from projects


  return(
    <div>
      <Skills/>
      <ProjectCard/>
    </div>
  );
}

export default Projects;