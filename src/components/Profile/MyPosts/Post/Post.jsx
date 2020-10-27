import React from 'react';
import styles from './Post.module.css';

const Post=(props)=>{
    return (
    <div className={styles.item}>
        <img className={styles.avatar} src='' alt="Аватар"></img>
        {props.text}
    </div>);
}

export default Post;