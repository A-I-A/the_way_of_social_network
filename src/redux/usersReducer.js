import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT= 'SET-TOTAL-USERS-COUNT';
const TOGGLE_ISFETCHING = 'TOGGLE-ISFETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let initialState ={
    users:[],
    totalUsersCount : 0,
    pageSize : 5,
    currentPage : 2,
    isFetching : true,
    followingProgress : [],
} 
    
export const usersReducer=(state=initialState, action)=>{
    switch (action.type){
        case FOLLOW : {
          return {...state,
          users: state.users.map( u=>{
            if (u.id === action.userId){
                return {...u,followed:true};}
                return u;})
          }
        }
        case UNFOLLOW : {
            return  {...state,
            users: state.users.map( u=>{
              if (u.id === action.userId){
                  return {...u,followed:false};}
                  return u;})
            }
        }   

        case SET_USERS : {
            return {...state, users: [...action.users]};
        }
        case SET_CURRENT_PAGE :{
            return {...state, currentPage : action.currentPage};
        }
        case SET_TOTAL_USERS_COUNT :{
            return{...state,totalUsersCount : action.totalUsersCount}
        }
        case TOGGLE_ISFETCHING : {
            return{...state, isFetching : action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS :{
            return{...state, followingProgress : action.isFetching
                                                 ? [...state.followingProgress, action.userId]
                                                 : state.followingProgress.filter(id=> id !== action.userId)}
        }        
               
        default : return state;


    }
}

export const followSucces = (userId)=>{
    return {type : FOLLOW , userId : userId};
}

export const unfollowSucces = (userId)=>{
    return {type : UNFOLLOW, userId : userId };
}

export const setUsers =(users)=>{
  return {type : SET_USERS, users : users};
}

export const setCurrentPage =(currentPage) =>{
    return{ type : SET_CURRENT_PAGE, currentPage : currentPage };
}

export const setTotalUsersCount =(u) =>{
    return{type:SET_TOTAL_USERS_COUNT, totalUsersCount : u};
}

export const toggleIsFetching = (isFetching) =>{
    return{type: TOGGLE_ISFETCHING, isFetching : isFetching}
}

export const toggleFollowingProgress = (isFetching , userId) =>{
    return {type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId};
}

export const requestUsers=(currentPage, pageSize) =>{return async (dispatch)=>{ 
        dispatch(toggleIsFetching(true));
        let data = await userAPI.getUsers(currentPage, pageSize);
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
    }   
}

const followUnfollowFlow =async (dispatch, userID, userAPIMethod,actionCreator) => {
    dispatch(toggleFollowingProgress(true, userID));
    let response = await userAPIMethod(userID);   
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userID));
    }
    dispatch(toggleFollowingProgress(false, userID));

}

export const follow = (userID) => {return async (dispatch) => {
        let userAPIMethod = userAPI.follow;
        let actionCreator = followSucces;
        followUnfollowFlow (dispatch, userID, userAPIMethod,actionCreator);
    }
}


export const unfollow = (userID) => {return async (dispatch) => {
        let userAPIMethod = userAPI.unfollow;
        let actionCreator = unfollowSucces;
        followUnfollowFlow (dispatch, userID, userAPIMethod,actionCreator);
    }
}