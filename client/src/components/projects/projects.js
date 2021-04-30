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
      <h1>Skills and Projects</h1>
      <Grid container spacing={2}>
        {skills.map(skill => (
          <Skills
            key={skill}
            skill={skill}
          />
        ))}
      </Grid>
      <Grid container spacing={0}>
        {projects.map(project => (
          <ProjectCard
            key={project._id}
            title={project.title}
            description={project.description}
            image={project.image_link}
            repo={project.repo_link}
            deployed={project.deployed_link}
            skills={project.skills}
          />
        ))}

      </Grid>
    </div>
  );
}

export default Projects;