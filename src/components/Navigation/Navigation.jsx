import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';



const Navigation = ()=>{
   return (<nav className={styles.nav}>
    <ul> 
      <li className={styles.item}> <NavLink to = "/profile" activeClassName={styles.activeLink}> 
        Profile </NavLink> </li>
      <li className={styles.item}> <NavLink to = "/dialogs" activeClassName={styles.activeLink}>
        Dialogs  </NavLink></li>
      <li className={styles.item}> <NavLink to = "/news" activeClassName={styles.activeLink}> 
        News  </NavLink></li>
      <li className={styles.item}> <NavLink to = "/music" activeClassName={styles.activeLink} > 
        Music  </NavLink></li>
      <li className={styles.item}> <NavLink to = "/settings" activeClassName={styles.activeLink} > 
        Settings  </NavLink></li>
      <li className={styles.item}> <NavLink to = "/users" activeClassName={styles.activeLink} > 
        Users  </NavLink></li>
      
    </ul>
  </nav>);
};

export default Navigation;