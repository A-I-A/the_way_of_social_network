import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
        posts: [
            { id: 1, text: "qwert", likesCount: 10 },
            { id: 2, text: "trewq", likesCount: 5 },
            { id: 3, text: "abcd", likesCount: 5 },
        ],
        profile : null,
        status: '123 ',
};

const profileReducer=(state=initialState, action)=>{
    switch (action.type){
        case ADD_POST : {
            return{...state, 
                    posts :[...state.posts, {id: 8, text : action.text, likesCount : 50}]}};
            
        case SET_USER_PROFILE : { 
            return {...state, profile : action.profile};
            
        }
        case SET_STATUS : {
            return{...state, status : action.status};
        }
        case DELETE_POST : {
            return{...state, posts : state.posts.filter(p=>p.id != action.id)};
        }
        default: {return state;}
    }    
}

export const addNewPost = (text)=>{
    return {type : ADD_POST, text};
}

export const deletePost = (id)=>{
    return {type : DELETE_POST, id};
}

export const setUserProfile =(profile)=> {
    return{type : SET_USER_PROFILE, profile:profile};
}

export const setStatus =(status)=> {
    return{type : SET_STATUS, status:status};
}

export const getUserProfile = (userID)=>{return async (dispatch)=>{
        let response = await userAPI.getUserProfile(userID);
        dispatch(setUserProfile(response.data));
    }
}

export const getStatus = (userID) =>{return async (dispatch) =>{
    let response= await profileAPI.getStatus(userID);
            dispatch(setStatus(response.data))
    }
}

export const updateStatus = (status) =>{ return async (dispatch) =>{
    let response = await profileAPI.updateStatus(status)
            if(response.data.resultCode===0){
            dispatch(setStatus(status))
            }
    }
}

export default profileReducer;