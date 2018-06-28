import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Tasks from './Tasks';

let styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

let Container = props => {
  let { classes, projectManager } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.root} elevation={1}>
            <Button>Add Task</Button>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Tasks projectManager={projectManager} />
        </Grid>
      </Grid>
    </div>
  )
};

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  projectManager: PropTypes.object.isRequired
};

export default withStyles(styles)(Container);
