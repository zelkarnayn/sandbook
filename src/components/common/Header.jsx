import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import JavascriptIcon from "@mui/icons-material/Javascript";
import ReactIcon from "../../assets/ReactIcon.svg";
import CreateIcon from "@mui/icons-material/Create";
import HStyle from "../../styles/header.module.scss";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

function Header() {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <AppBar position="static">
      <Toolbar className={HStyle.toolbar}>
        <IconButton sx={{ mr: 3, fontSize: 15 }}>
        <Link style={linkStyle} to={'/JsArticles'}>Javascript</Link>
          <JavascriptIcon />
        </IconButton>
        <IconButton sx={{ mr: 3, fontSize: 15 }}>
          React
          <img src={ReactIcon} alt="img" />
        </IconButton>
        <IconButton className={HStyle.AddArtcl} sx={{ mr: 3, fontSize: 15 }}>
          <Link style={linkStyle} to={"/addArticles"}>
            Добавить статью
          </Link>
          <CreateIcon sx={{ fontSize: 15 }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
