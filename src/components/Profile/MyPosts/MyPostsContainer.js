import React from "react";
import { connect } from "react-redux";
import { AddPostCreator } from '../../../redux/Post-reduser';
import MyPosts from './MyPosts';





const mapStateToProps = (state) => {
     return {
          posts: state.Post.post,
          newt: state.Post.newPostText
     }
};

const mapDispatchToProps = (dispatch) => {
     return {

          AddPostCreator: (newPostBody) => {
               dispatch(AddPostCreator(newPostBody));
          }
     }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
