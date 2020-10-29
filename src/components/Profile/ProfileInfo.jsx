import React from 'react';
import Preloader from '../common/Preloader/Preloader';
// import styles from './Profile.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../images/user.jpg'
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({profile,status,updateStatus, savePhoto,isOwner, saveProfile})=>{
    let [editMode, setEditMode] = useState(false);
    if (!profile) {return <Preloader/>}
    

    let onPhotoSelected=(e)=>{
        if (e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }
     let onSubmit=(FormData)=>{saveProfile(FormData).then(()=>{setEditMode(false)})}

    return(
        <div>
            <img src={profile.photos.large || userPhoto} alt='' />
            {isOwner && <input type={"file"} onChange={onPhotoSelected} />}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

    {editMode ? <ProfileDataForm profile={profile} onSubmit={onSubmit} /> 
              : <ProfileData profile={profile} 
                             activateEditMode = {()=>{setEditMode(true)}}
                             isOwner={isOwner} />} 

            <div>
                Contacts : {Object.keys(profile.contacts).map(key => {
                return <Contact key={key }contactTitle={key} contactValue={profile.contacts[key]} />
            })}
            </div>


        </div>);
}

const ProfileData = ({profile,isOwner,activateEditMode})=>{
    return(
        <div>
            {isOwner && <button onClick={activateEditMode}> Edit </button>}
            <div>
                Full name:  {profile.fullName}
            </div>
            <div>
                About me:  {profile.aboutMe}
            </div>
            <div>
                Looking for a job:  {profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div>
                My skills :{profile.lookingForAJob && profile.lookingForAJobDescription}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue})=>{
    return (
        <div> {contactTitle} : {contactValue} </div>
    )
}

export default ProfileInfo;