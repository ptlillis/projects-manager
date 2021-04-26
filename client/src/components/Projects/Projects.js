import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Project from './Project/Project';
import useStyles from './styles';

const Projects = ({ setCurrentId }) => {
  const projects = useSelector((state) => state.projects);
  const classes = useStyles();

  console.log(' >>>> Project List >>>>>>', projects)

  return (
    !projects.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {projects.map((project) => (
          <Grid key={project._id} item xs={12} sm={6} md={6}>
            <Project project={project} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Projects;
