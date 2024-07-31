import React from "react";
import { Link } from "react-router-dom";
import classes from "./Post.module.css";
const names = ["Saurav", "Anjali"];
const Post = (props) => {
  const { id, author, body } = props;
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
};

export default Post;
