import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount (){
        let userId = this.props.match.params.userId;
        if (!userId) { userId = this.props.authorizedUserID
            if (!userId) { this.props.history.push("/login")}}
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render(){
        return (<Profile {...this.props} profile={this.props.profile} 
                                         status={this.props.status}
                                         updateStatus={this.props.updateStatus}
                                         isOwner={!this.props.match.params.userId}
                                         savePhoto = {this.props.savePhoto}
                                         saveProfile= {this.props.saveProfile}/>);
    }
}

let mapStateToProps =(state) =>{
    return{profile : state.profilePage.profile,
           status : state.profilePage.status,
           authorizedUserID : state.auth.id,
           userIsAuth : state.auth.isAuth,
    };
}

export default  compose (connect (mapStateToProps,{getUserProfile,getStatus, updateStatus,savePhoto, saveProfile}), withRouter,
                                                                      withAuthRedirect) 
                                                                    (ProfileContainer)