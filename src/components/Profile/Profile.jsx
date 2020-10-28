import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPosts.container';



const Profile = (props)=>{
    return(      
    <div>
        <ProfileInfo profile={props.profile} status={props.status} 
                                             updateStatus={props.updateStatus}
                                             isOwner = {props.isOwner}
                                             savePhoto= {props.savePhoto}
                                             saveProfile= {props.saveProfile}/>
        <MyPostsContainer />
    </div>);
}

export default Profile;