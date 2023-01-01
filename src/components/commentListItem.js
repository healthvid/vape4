import React from "react";
import icon from './Videos/logo192.png';
import user1_pic from './Videos/profile_pic1.png';
import user2_pic from './Videos/profile_pic2.png';
import user3_pic from './Videos/profile_pic3.png';
import user4_pic from './Videos/profile_pic4.png';
import user5_pic from './Videos/profile_pic5.png';
import user6_pic from './Videos/profile_pic6.png';
import defaultUser from './Videos/default.png';
import { LittleLike, LittleUnlike } from "./icons";

const CommentListItem = ({ comment, index, total }) => {
    const {
      userName,
      time,
      comments,
      avatar
    } = comment;
    const avatarList = [
      user1_pic, user2_pic, user3_pic, user4_pic, user5_pic, user6_pic
    ]

    

  return (
    <li className="list-group-item bg-light ">
      <div className="d-flex flex-row ms-0 me-1 text-nowrap ">
        <div className=" align-self-start ps-0 pe-0 me-2" id='commentIcon'>
          <img
            alt={icon}
            src={avatar === -1? defaultUser: avatarList[avatar]}
            width="48px"
            className="rounded-circle float-start"
          />
        </div>

        <div className=" ps-2 text-wrap ">
          <div className="fw-bold mb-0 commentsWords">
            {userName} 
            <span className="fw-normal subscribeNum">&nbsp; {time }</span>
          </div>
          <div className="commentsWords">{comments}</div>
          <div className="d-flex flex-row">
            <div className=" pt-2 pe-3">
              <LittleLike/>
            </div>
            <div className=" pt-2 pe-3">
              <LittleUnlike/>
            </div>
            <div className="">
              <span className="fw-normal subscribeNum"> REPLY</span>
            </div>
          </div>

        </div>

        
      </div>
    </li>
  );
};

export default CommentListItem;