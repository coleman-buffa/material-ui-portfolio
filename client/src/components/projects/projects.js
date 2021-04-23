import React, { useState, useEffect}  from 'react';
import API from "../../utils/API";
import Skills from "../skills/skills";
import ProjectCard from "../projectcard/projectcard";

function Projects () {

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    loadProjects();
    loadSkills();
  }, []);

  const loadProjects = () => {
    API.getProjects({})
      .then(data => {        
        setProjects(data.data);
      })
  };

  const loadSkills = () => {
    //Scan through project.skills and create a unique entry for each skill 
  }

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