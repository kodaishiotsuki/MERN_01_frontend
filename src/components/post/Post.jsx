import { MoreVert } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  // console.log(post)
  const [like, setLike] = useState(post.likes.length); //likesの長さを取得
  const [isLiked, setIsLiked] = useState(false);
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);
      // console.log(response.data);
      setUsers(response.data);
    };
    fetchUsers();
  }, [post.userId]);

  //いいねボタンクリック
  const handleLike = () => {
    //既に押されていたら-1,まだなら+1
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Link to={`/profile/${users.username}`}>
              <img
                src={
                  users.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=''
                className='postProfileImg'
              />
            </Link>
            <span className='postUserName'>{users.username}</span>
            <span className='postDate'>{post.createdAt}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.img} alt='' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              src={PUBLIC_FOLDER + "/heart.png"}
              alt=''
              className='likeIcon'
              onClick={() => handleLike()}
            />
            <span className='postLikeCounter'>
              {like}人がいいねを押しました
            </span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
