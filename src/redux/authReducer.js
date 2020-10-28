import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';
// const UNFOLLOW = 'UNFOLLOW';


let initialState ={
    id : null,
    email : null,
    login : null,
    isAuth : false,
    isFetching : false,
    captchaURL: null,
} 
    
export const authReducer=(state=initialState, action)=>{
    switch (action.type){
        case SET_USER_DATA : {
          return {...state, 
                 ...action.data,
                }
        }
        case GET_CAPTCHA_URL_SUCCESS :{
            return {...state, captchaURL : action.captchaURL}  
        }

        default : return state;
    }
}

export const setUserAuthData = (id,email,login,isAuth)=>{
    return {type : SET_USER_DATA ,  data : {id, email, login, isAuth}};
}

export const getUserAuthData = () =>{return async (dispatch) => {
    let response= await authAPI.authMe();
            if (response.data.resultCode===0){
                let {id, login, email} = response.data.data;
                dispatch(setUserAuthData(id, email, login, true ));
    }}
}

export const getCaptchaUrlSuccess = (url)=>{
    return {type : GET_CAPTCHA_URL_SUCCESS , captchaURL : url };
}

export const login = (email, password, rememberMe,captcha="") =>{ return async( dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.data.resultCode===0){
            dispatch(getUserAuthData()); 
        }else{
            if (response.data.resultCode===10){
                dispatch(getCaptchaUrl());
            }
            let message = response.data.messages.length >0 ? response.data.messages[0] : "Some Error";
            dispatch(stopSubmit("login",{_error : message}));
        }
    }
}

export const getCaptchaUrl = () =>{ return async( dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}}

export const logout = () =>{return async (dispatch) => {
    let response= await authAPI.logout();
        if (response.data.resultCode===0){
            dispatch(setUserAuthData (null, null, null, false));
        }}
}
