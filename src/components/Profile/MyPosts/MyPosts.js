import s from './MyPosts.module.css';
import Posts from './Posts/Posts';
import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormControls/FormControls'
import { maxLengthCreator, reguired } from '../../../utils/validators/validators';

const MyPosts = props => {


     let PostsIle = props.posts.map(p => <Posts key={p.message} message={p.message} like={p.like} />);

     
     let AddNewPost = (values) => {
          props.AddPostCreator(values.newPostBody)
     }

     return (

          <div className={s.item}>
               Мой пост
               <AddPostFormRedux onSubmit={AddNewPost} />
               <div>
                    {PostsIle}

               </div>

          </div>


     );
}
let maxLength10 = maxLengthCreator(10)
const AddPostForm = (props) => {
     return (
          <form onSubmit={props.handleSubmit}>
               <div>
                    <Field component={Textarea} name='newPostBody' placeholder='Enter you post'
                         validate={[reguired, maxLength10]} />
               </div>
               <div><button>NewPost</button></div>
          </form>
     )
}

const AddPostFormRedux = reduxForm({ form: 'AddPostForm' })(AddPostForm)

export default MyPosts;
