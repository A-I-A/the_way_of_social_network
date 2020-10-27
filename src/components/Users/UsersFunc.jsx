import React from 'react'


import  Paginator  from '../common/Paginator/Paginator';
import User from './User';




const UsersFunc = (props)=>{ 
    return (
        <div>
            <div> <Paginator totalItemsCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChange={props.onPageChange} />
            </div>
            <div>
                {props.users.map(u=><User user={u}
                                          followingProgress={props.followingProgress}
                                          key={u.id}
                                          follow={props.follow}
                                          unfollow={props.unfollow}/>)}
            </div>
        </div>
    )
}

export default UsersFunc;