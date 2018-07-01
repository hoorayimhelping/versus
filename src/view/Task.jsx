import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

let styles = theme => ({
  gridContainer: {
    padding: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 1.5,
    paddingBottom: theme.spacing.unit * 1.5
  },
  listItem: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  paper: {
    padding: theme.spacing.unit,
    width: '100%'
  }
});

let Task = props => {
  let { classes, onClick, task } = props;

  let clickHandler = (event) => {
    event.preventDefault();
    onClick(task.id);
  };

  return (
    <ListItem key={`task-${task.id}`} className={classes.listItem}>
      <Paper className={classes.paper}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs>
            <Typography variant="title">
              {task.name}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1" gutterBottom align="right">#{task.id}</Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.gridContainer}>
          <Grid item xs>
            <Typography component="p">{task.description}</Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.gridContainer}>
          <Grid item xs align="right">
            <Button variant="contained" size="small" onClick={clickHandler}>{task.transitionName}</Button>
          </Grid>
        </Grid>

      </Paper>
    </ListItem>
  );
};

Task.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};

export default withStyles(styles)(Task);
