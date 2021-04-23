import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import Skills from "../skills/skills";
import ProjectCard from "../projectcard/projectcard";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

function Projects() {

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    loadProjects();
    loadSkills();
  }, []);

  const loadProjects = () => {
    API.getProjects()
      .then(data => {
        setProjects(data.data);
      })
  };

  const loadSkills = () => {
    API.getSkills()
      .then(data => {
        setSkills(data.data);
      })
  }

  return (
    <div>
      <Grid container spacing={2}>
        {skills.map(skill => (
          <Skills
          key={skill}  
          skill={skill}
          />
        ))}

      </Grid>
      <ProjectCard />
    </div>
  );
}

export default Projects;