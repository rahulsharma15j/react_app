import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import {
  ChatBubbleOutline,
  VerifiedUser,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@mui/icons-material";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              John Doe{" "}
              <span className="post__headerSpecial">
                <VerifiedUser className="post__badge" />
                @clever
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              qui minima quaerat excepturi veniam earum labore fugiat aliquam
              natus dicta.
            </p>
          </div>
        </div>
        <img
          src="https://i.guim.co.uk/img/media/5cee989fa76694a307076baba0d9e82101f26fbe/0_98_3183_1911/master/3183.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=535aa2e06d5507c515c38a95e3682fea"
          alt=""
        />
        <div className="port__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
