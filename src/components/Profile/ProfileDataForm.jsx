import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ProfileDataForm = ({profile,handleSubmit})=>{
    return(
        <form onSubmit={handleSubmit}> 
            <button> Save </button>
            <div>
                 Full name: <Field component={"input"} name="fullName" placeholder={profile.fullName} />
            </div>
            <div>
                About me: <Field component={"input"} name="aboutMe" placeholder={profile.aboutMe} /> 
            </div>
            <div>
                Looking for a job: <Field component={"input"} name="lookingForAJob" type={"checkbox"} /> 
            </div>
            <div>
                 My skills : <Field component={"textarea"} name="lookingForAJobDescription" placeholder={profile.lookingForAJobDescription} />
            </div>
            <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {return(
                 <div key={key}>  
           <b>{key}:<Field component={"input"} name={key} /></b>
           </div>)})}
           </div>
        </form>
    )
}

export default reduxForm({form : "edit-profile",})(ProfileDataForm);

