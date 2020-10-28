import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import styles from './Profile.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../images/user.jpg'


const ProfileInfo = (props)=>{
    if (!props.profile) {return <Preloader/>}

    let onPhotoSelected=(e)=>{
        if (e.target.files.length){
            props.savePhoto(e.target.files[0])
        }

    }

    return(
    <div>
        <img src={props.profile.photos.large || userPhoto} alt='' /> 
        {props.isOwner && <input type={"file"} onChange={onPhotoSelected}/>}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>);
}

export default ProfileInfo;