import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import { maxLengthCreator, textRequired } from '../../utils/validator';
import { SuperText } from '../../common/supertext/supertext';

const MyPosts = (props)=>{
    let postElements = props.posts.map(post=><Post text={post.text}/> );

    let addNewPost=(e)=>{
      props.addNewPost(e.addPost);
    }
    return(
      <div>
       <AddNewPostFormRedux onSubmit={addNewPost}/>
        <div>
          {postElements}
        </div>
      </div>);
}
const maxLength =maxLengthCreator(10);
const AddNewPostForm = (props) => {
 
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={SuperText} name='addPost' placeholder='Введите сообщение'
            validate={[textRequired, maxLength]}/>
      <button> Отправить </button>
    </form>
  )
}
const AddNewPostFormRedux = reduxForm({form : "addPostForm",})(AddNewPostForm);

export default MyPosts;