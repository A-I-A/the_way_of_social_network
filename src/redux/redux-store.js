import {applyMiddleware, combineReducers, createStore} from 'redux';
import { authReducer } from './authReducer';
import { dialogsReducer } from './dialogsReducer';
import  profileReducer  from './profileReducer';
import { usersReducer } from './usersReducer'
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import { appReducer } from './appReducer';

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    usersPage : usersReducer, 
    auth : authReducer,
    app : appReducer,
    form : formReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;