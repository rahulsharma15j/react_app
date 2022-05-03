import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import { VerifiedUser } from "@mui/icons-material";

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
              <span>
                <VerifiedUser className="post__badge" />
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
