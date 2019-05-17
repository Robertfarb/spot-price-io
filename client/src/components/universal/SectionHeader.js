import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import React from 'react'

export default function SectionHeader(props) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h4" color="inherit">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
