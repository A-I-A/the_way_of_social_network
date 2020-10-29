import React, { useState } from 'react';
import style from './Paginator.module.css'

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize =10})=>{
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
     for (let i=1; i<= pagesCount; i++){
        pages.push(i)
    }
    let  portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber-1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize ;

    return (<div className={style.paginator}>
         {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber-1)}}>Previous</button>} 
    
             {pages.filter(p => p>=leftPortionPageNumber && p<=rightPortionNumber)
                .map(p=>{
                return (
                    <span key={p} className={currentPage === p && style.selectedPage}
                        onClick={(e) => {onPageChange(p) }}>
                        {p} </span>)})}
            
            {portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button>}
            </div>

)}

export default Paginator;