import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { updateProject } from '../../actions/projects.js';

const Form = ({ currentId, setCurrentId }) => {
  const [projectData, setProjectData] = useState({ project: '', duedate: '', description: '', tags: '', selectedFile: '' });
  const project = useSelector((state) => (currentId ? state.projects.find((description) => description._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (project) setProjectData(project);
  }, [project]);

  const clear = () => {
    setCurrentId(0);
    setProjectData({ project: '', duedate: '', description: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
      dispatch(updateProject(currentId, projectData));
      clear();
    
    };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${project.duedate}"` : 'Manage a new Report Here'}</Typography>
        <TextField name="project" variant="outlined" label="Project Name" fullWidth value={projectData.project} onChange={(e) => setProjectData({ ...projectData, project: e.target.value })} />
        <TextField name="duedate" variant="outlined" label="Due Date" fullWidth value={projectData.duedate} onChange={(e) => setProjectData({ ...projectData, duedate: e.target.value })} />
        <TextField name="description" variant="outlined" label="Project Description" fullWidth multiline rows={4} value={projectData.description} onChange={(e) => setProjectData({ ...projectData, description: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={projectData.tags} onChange={(e) => setProjectData({ ...projectData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setProjectData({ ...projectData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
