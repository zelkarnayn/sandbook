import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ReactIcon from '../../assets/ReactIcon.svg'

function HeadButtons() {
  return (
    <AppBar>
      <Toolbar>
        <IconButton sx={{ mr: 3, fontSize: 15 }}>
          Javascript
          <JavascriptIcon />
        </IconButton>

        <IconButton sx={{ fontSize: 15 }}>React 
        <img src={ReactIcon} alt="img"/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default HeadButtons;
