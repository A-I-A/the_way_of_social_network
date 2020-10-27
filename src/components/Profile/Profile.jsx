import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPosts.container';



const Profile = (props)=>{
    return(      
    <div>
        <ProfileInfo profile={props.profile} status={props.status} 
                                             updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>);
}

export default Profile;