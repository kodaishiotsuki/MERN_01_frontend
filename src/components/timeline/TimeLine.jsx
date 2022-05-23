import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./TimeLine.css";

export default function TimeLine({ username }) {
  const [posts, setPosts] = useState([]);
  // console.log(username);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/62836b7e0e4e5af9a68b2ae8");
      // console.log(response.data);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className='timeline'>
      <div className='timelineWrapper'>
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
