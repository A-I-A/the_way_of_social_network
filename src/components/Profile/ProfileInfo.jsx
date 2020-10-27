import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import styles from './Profile.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const ProfileInfo = (props)=>{
    if (!props.profile) {
        return <Preloader/>
    }
    return(
    <div>
        <img src={props.profile.photos.large} alt=''/>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        AVATAR + DESCRIPTION
    </div>);
}

export default ProfileInfo;