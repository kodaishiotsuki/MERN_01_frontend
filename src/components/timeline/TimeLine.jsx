import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./TimeLine.css";
import { Posts } from "../../dummyData";

export default function TimeLine() {
  // const user = Users.filter((user) => user.id === 1);
  // console.log(user[0].username);
  return (
    <div className='timeline'>
      <div className='timelineWrapper'>
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
