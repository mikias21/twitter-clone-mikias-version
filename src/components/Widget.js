import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

// css
import "../styles/Widget.css";

function Widget() {
  return (
    <div className="widget">
      <div className="widget__input">
        <SearchOutlined className="widget__inputIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"1352757268626849797"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/elonmusk"}
          options={{ text: "Check this out" }}
        />
      </div>
    </div>
  );
}

export default Widget;
