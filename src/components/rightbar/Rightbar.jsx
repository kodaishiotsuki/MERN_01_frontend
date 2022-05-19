import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className='eventContainer'>
          <img src='/assets/star.png' alt='' className='starImg' />
          <span className='eventText'>
            <b>フォロワー</b>限定イベント開催中
          </span>
        </div>
        <img src='/assets/event.jpeg' alt='' className='eventImg' />
        <h4 className='rightbarTitle'>オンラインの友達</h4>
        <ul className='rightbarFriendList'>
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className='promotionTitle'>プロモーション広告</p>
        <img
          src='/assets/promotion/promotion1.jpeg'
          alt=''
          className='rightbarPromotionImg'
        />
        <p className='promotionName'>ショッピング</p>
        <img
          src='/assets/promotion/promotion2.jpeg'
          alt=''
          className='rightbarPromotionImg'
        />
        <p className='promotionName'>カーショップ</p>
        <img
          src='/assets/promotion/promotion3.jpeg'
          alt=''
          className='rightbarPromotionImg'
        />
        <p className='promotionName'>株式会社ほげ</p>
      </>
    );
  };

  const RightBar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>ユーザー情報</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>出身：</span>
            <span className='rightbarInfoKey'>福岡</span>
          </div>
          <h4 className='rightbarTitle'>あなたの友達</h4>
          <div className='rightbarFollowings'>
            <div className='rightbarFollowing'>
              <img
                src='/assets/person/1.jpeg'
                alt=''
                className='rightbarFollowingImg'
              />
              <span className='rightbarFollowingName'>hoge太郎</span>
            </div>
            <div className='rightbarFollowing'>
              <img
                src='/assets/person/2.jpeg'
                alt=''
                className='rightbarFollowingImg'
              />
              <span className='rightbarFollowingName'>hoge次郎</span>
            </div>
            <div className='rightbarFollowing'>
              <img
                src='/assets/person/3.jpeg'
                alt=''
                className='rightbarFollowingImg'
              />
              <span className='rightbarFollowingName'>田中</span>
            </div>
            <div className='rightbarFollowing'>
              <img
                src='/assets/person/4.jpeg'
                alt=''
                className='rightbarFollowingImg'
              />
              <span className='rightbarFollowingName'>古賀</span>
            </div>
            <div className='rightbarFollowing'>
              <img
                src='/assets/person/5.jpeg'
                alt=''
                className='rightbarFollowingImg'
              />
              <span className='rightbarFollowingName'>菊川</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {profile ? <RightBar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
