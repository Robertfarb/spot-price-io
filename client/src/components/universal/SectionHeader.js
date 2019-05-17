import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import React from 'react'

export default function SectionHeader(props) {
  return (
    <div className="sectionHeader">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h3" color="inherit">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
