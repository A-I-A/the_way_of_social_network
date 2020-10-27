import { connect } from 'react-redux';
import { addNewPost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state)=>{
    return{
        posts : state.profilePage.posts,
        newPostText : state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        addNewPost : (text)=>{
            dispatch(addNewPost(text));
        },     
    }

}
const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;