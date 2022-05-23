import axios from "axios";
import React, { useEffect, useState } from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TimeLine from "../../components/timeline/TimeLine";
import Topbar from "../../components/topbar/Topbar";
import "./Profile.css";
import { useParams } from "react-router-dom";

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [users, setUsers] = useState({});
  const username = useParams().username;
  console.log(username);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`/users?username=${username}`);
      // console.log(response.data);
      setUsers(response.data);
    };
    fetchUsers();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className='profileContainer'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                src={users.coverPicture || PUBLIC_FOLDER + "/post/3.jpeg"}
                alt=''
                className='profileCoverImg'
              />
              <img
                src={
                  users.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=''
                className='profileUserImg'
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>{users.username}</h4>
              <span className='profileInfoDesc'>{users.desc}</span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <TimeLine username={username} />
            <Rightbar users={users} />
          </div>
        </div>
      </div>
    </>
  );
}
