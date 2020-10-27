import React from 'react';
import style from './supertext.module.css'

export const SuperText=({input, meta, ...props})=>{
    const isError = meta.touched && meta.error;
    return(
        <div>
            <div>
                <span className={style.errortext}>  {isError && meta.error} </span>
            </div>
            <textarea {...input} {...props} className= {isError && style.error}> </textarea>
        </div>
    )
}

export const SuperInput=({input, meta, ...props})=>{
    const isError = meta.touched && meta.error;
    return(
        <div>
            <div>
                <span className={style.errortext}>  {isError && meta.error} </span>
            </div>
            <input {...input} {...props} className= {isError && style.error}/>
        </div>
    )
}

