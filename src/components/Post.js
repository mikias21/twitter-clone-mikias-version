import React, { forwardRef } from "react";

// css
import "../styles/Post.css";

// firebase
import db from "../firebase";

// Material UI
import { Avatar } from "@material-ui/core";
import {
  ChatBubble,
  Publish,
  VerifiedUserOutlined,
  VerifiedUserRounded,
  Repeat,
  FavoriteBorder,
} from "@material-ui/icons";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                {verified && <VerifiedUserRounded className="post__badge" />}
                <span className="username">{username}</span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="POST_IMAGE" />
          <div className="post__footer">
            <ChatBubble fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
