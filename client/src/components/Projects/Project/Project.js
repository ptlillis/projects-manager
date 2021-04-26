import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { UpdateDeveloper, deleteProject } from '../../../actions/projects';
import useStyles from './styles';

const Project = ({ project, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={project.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} duedate={project.duedate} />
      <div className={classes.overlay}>
        <Typography variant="h6">{project.project}</Typography>
        <Typography variant="body2">{moment(project.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(project._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{project.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.duedate} gutterBottom variant="h5" component="h2">{project.duedate}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{project.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(UpdateDeveloper(project._id))}><ThumbUpAltIcon fontSize="small" /> Like {project.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deleteProject(project._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Project;
