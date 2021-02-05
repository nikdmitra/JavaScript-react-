import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import Profileinfo from './Profileinfo/Profileinfo';
import React from "react"

const Profile = (props) => {


  return (
    <div>
      <Profileinfo saveProfile={props.saveProfile} savePhoto = {props.savePhoto } isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer store={props.store}
      />
    </div>
  );
}

 
export default Profile;
