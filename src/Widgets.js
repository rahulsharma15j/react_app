import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@mui/icons-material";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTimelineEmbed />
      </div>
    </div>
  );
};

export default Widgets;
