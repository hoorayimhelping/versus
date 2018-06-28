import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

let styles = theme => ({});

let Tasks = props => {
  return (
    <Grid container>
      <Grid item xs>
        <Typography variant="display2" gutterBottom>
          Todo
        </Typography>
        <List>
          <ListItem>
            <p>Item 1</p>
          </ListItem>
          <ListItem>
            <p>Item 2</p>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs>
        <Typography variant="display2" gutterBottom>
          In Progress
        </Typography>
      </Grid>
      <Grid item xs>
        <Typography variant="display2" gutterBottom>
          Done
        </Typography>
      </Grid>
    </Grid>
  );
};

Tasks.propTypes = {
  classes: PropTypes.object.isRequired,
  projectManager: PropTypes.object.isRequired
};

export default withStyles(styles)(Tasks);
