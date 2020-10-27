import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'

const Header = (props)=>{
   return( <header className={style.header}> 
       <img src="https://www.pc-magazin.de/bilder/93828340/800x480-c2/Gimp-Tricks-Bilderbearbeitung-Tipps-Tutorial.jpg" alt=''></img> 
       <div className={style.loginblock}> 
       {props.isAuth ? <div><button onClick={props.logout}> Logout</button> </div>
                       : <NavLink to='/login'>Login  </NavLink>}
       </div>
       </header>);
       
}; 

export default Header;