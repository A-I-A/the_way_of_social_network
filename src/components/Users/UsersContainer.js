import { connect } from "react-redux";
import {  follow, setCurrentPage,
          unfollow, toggleFollowingProgress, requestUsers } from "../../redux/usersReducer";
import UsersFunc from "./UsersFunc";
import React from 'react';
import Preloader from "../common/Preloader/Preloader";
import { getCurrentPage, getFollowingProgress, getIsFetching, getTotalUsersCount, getUsers,getUsersPageSize } from "../../redux/user-selectors";



class UsersContainer extends React.Component {
    componentDidMount () {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);

    }
    onPageChange =(pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {return <> {this.props.isFetching ? <Preloader /> : null }
         <UsersFunc totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChange={this.onPageChange}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow = {this.props.follow}
                    followingProgress = {this.props.followingProgress}/>  
                    </>
                    }
}

// let mapStateToProps = (state)=>{
//     return{ 
//         users : state.usersPage.users,
//         totalUsersCount : state.usersPage.totalUsersCount,
//         pageSize : state.usersPage.pageSize,
//         currentPage : state.usersPage.currentPage,
//         isFetching : state.usersPage.isFetching,
//         followingProgress : state.usersPage.followingProgress,
//     }
// };

let mapStateToProps = (state)=>{
    return{ 
        users : getUsers(state),
        totalUsersCount : getTotalUsersCount(state),
        pageSize : getUsersPageSize(state),
        currentPage : getCurrentPage(state),
        isFetching : getIsFetching(state),
        followingProgress : getFollowingProgress(state),
    }
};

export default connect(mapStateToProps,{ 
                       follow ,
                       unfollow , 
                       setCurrentPage ,
                       toggleFollowingProgress,
                       requestUsers}) (UsersContainer);

                                    