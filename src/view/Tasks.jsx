import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import Task from './Task';

let styles = theme => ({});

let Tasks = props => {
  let { projectManager } = props;

  return (
    <Grid container>
      <Grid item xs>
        <Typography variant="display2" gutterBottom>
          Todo
        </Typography>
        <List>
          {projectManager.todoTasks.map(task => (<Task task={task} key={`task-${task.name}-${task.id}`} />))}
        </List>
      </Grid>
      <Grid item xs>
        <Typography variant="display2" gutterBottom>
          In Progress
        </Typography>
        <List>
          {projectManager.inProgressTasks.map(task => (<Task task={task} key={`task-${task.name}-${task.id}`} />))}
        </List>
      </Grid>
      <Grid item xs>
        <Typography variant="display2" gutterBottom>
          Done
        </Typography>
        <List>
          {projectManager.doneTasks.map(task => (<Task task={task} key={`task-${task.name}-${task.id}`} />))}
        </List>
      </Grid>
    </Grid>
  );
};

Tasks.propTypes = {
  classes: PropTypes.object.isRequired,
  projectManager: PropTypes.object.isRequired
};

export default withStyles(styles)(Tasks);
