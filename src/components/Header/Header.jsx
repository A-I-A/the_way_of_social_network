import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'
import userPhoto from '../../images/user.jpg'

const Header = (props)=>{
   return( <header className={style.header}> 
       <img src={userPhoto} alt=''></img> 
       <div className={style.loginblock}> 
       {props.isAuth ? <div><button onClick={props.logout}> Logout</button> </div>
                       : <NavLink to='/login'>Login  </NavLink>}
       </div>
       </header>);
       
}; 

export default Header;