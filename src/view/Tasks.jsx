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
  let { projectManager } = props;

  return (
    <Grid container>
      <Grid item xs>
        <Typography variant="display2" gutterBottom>
          Todo
        </Typography>
        <List>
          {projectManager.todoTickets.map(ticket => (
            <ListItem key={`ticket-${ticket.id}`}><p>{ticket.id} - {ticket.name}: {ticket.description}</p></ListItem>)
          )}
        </List>
      </Grid>
      <Grid item xs>
        <Typography variant="display2" gutterBottom>
          In Progress
        </Typography>
        <List>
          {projectManager.inProgressTickets.map(ticket => (
            <ListItem key={`ticket-${ticket.id}`}><p>{ticket.id} - {ticket.name}: {ticket.description}</p></ListItem>)
          )}
        </List>
      </Grid>
      <Grid item xs>
        <Typography variant="display2" gutterBottom>
          Done
        </Typography>
        <List>
          {projectManager.doneTickets.map(ticket => (
            <ListItem key={`ticket-${ticket.id}`}><p>{ticket.id} - {ticket.name}: {ticket.description}</p></ListItem>)
          )}
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
