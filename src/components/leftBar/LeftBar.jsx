import React from "react";
import "../leftBar/leftbar.scss";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Diversity2Icon from "@mui/icons-material/Diversity2";

const LeftBar = () => {
  const badges =
    "Allow users to leave friends badges for them and have superlatives for outsings";
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="item">
            <Diversity3Icon />
            <span>Friends</span>
          </div>
          <div className="item">
            <CelebrationIcon />
            <span>Outings</span>
          </div>
          <div className="item">
            <Diversity2Icon />
            <span>Groups</span>
          </div>
          <div className="item">
            <Diversity3Icon />
            <span>Badges</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Shortcuts</span>
          <div className="item">
            <Diversity3Icon />
            <span>Friends</span>
          </div>
          <div className="item">
            <CelebrationIcon />
            <span>Outings</span>
          </div>
          <div className="item">
            <Diversity2Icon />
            <span>Groups</span>
          </div>
          <div className="item">
            <Diversity3Icon />
            <span>Badges</span>
          </div>
          <div className="item">
            <Diversity3Icon />
            <span>Badges</span>
          </div>
          <div className="item">
            <Diversity3Icon />
            <span>Badges</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <Diversity3Icon />
            <span>Friends</span>
          </div>
          <div className="item">
            <CelebrationIcon />
            <span>Outings</span>
          </div>
          <div className="item">
            <Diversity2Icon />
            <span>Groups</span>
          </div>
          <div className="item">
            <Diversity3Icon />
            <span>Badges</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
