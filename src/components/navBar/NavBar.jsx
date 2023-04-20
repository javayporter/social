import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import "../navBar/navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  const logo = "everything outside";
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>{`${logo}`}</span>
        </Link>
        <HomeOutlinedIcon />
        <div className="search">
          <input placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
      </div>
      <div className="right">
        <SmartToyOutlinedIcon />
        <NotificationsActiveOutlinedIcon />
      </div>
    </div>
  );
};

export default NavBar;
