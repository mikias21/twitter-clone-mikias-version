import React, { useState } from "react";

// css
import "../styles/TweetBox.css";

// firebase
import db from "../firebase";

// Material UI
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const postTweet = (e) => {
    e.preventDefault();
    db.collection("twitter").add({
      displayName: "Mikias",
      username: "@mikias0x00",
      verified: false,
      text,
      image,
      avatar:
        "https://pbs.twimg.com/profile_images/1310832445990682626/BoyrJIrQ_400x400.jpg",
    });

    setText("");
    setImage("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar />
          <input
            placeholder="what's happending ?"
            className="tweetbox__input__text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <input
          placeholder="Image Url"
          className="tweetbox__imageInput"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Button type="submit" className="tweetbox__button" onClick={postTweet}>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
