import React from 'react';
import styles from './Users.module.css'; 
import userPhoto from '../../images/user.jpg'
import { NavLink } from 'react-router-dom';


const User = ({user , followingProgress, follow, unfollow})=>{
    return(
        <div>             
            <NavLink to={"/profile/" + user.id}>
            <div>
                <img className={styles.userimg} alt="" src={user.photos.small != null ? user.photos.small : userPhoto} />
            </div>
        </NavLink>
            <div> {user.name} </div>
            <div> {user.status}</div>
            <div> {user.followed ? <button disabled={followingProgress.some(id => id === user.id)}
                onClick={() => { unfollow(user.id); }}> Unfollow </button>
                :
                <button disabled={followingProgress.some(id => id === user.id)}
                    onClick={() => {follow(user.id); }}>  Follow </button>
            }</div>
        </div>)
}

export default User;