import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

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
  let { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs>
          <Button>Add Task</Button>
        </Grid>
        <Grid item xs={8}>
          <p>buttons</p>
        </Grid>
      </Grid>
    </div>
  )
};

Container.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);
