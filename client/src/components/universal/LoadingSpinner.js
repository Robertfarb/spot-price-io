import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

function LoadingSpinner(props) {
  const { classes } = props;
  return (
    <div className="loading-wrapper text-center">
      <CircularProgress className={classes.progress} color='secondary' size={100}/>
    </div>
  );
}

LoadingSpinner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoadingSpinner);
