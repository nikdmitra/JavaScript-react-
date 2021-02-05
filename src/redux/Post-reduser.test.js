import { profileApi, usersApi } from "../api/userApi";
import React from "react";
import ReactDom from 'react-dom';
import PostReduser, {AddPostCreator}   from './Post-reduser'
it('Прошел тест или ты пидр', () => {

    let action = AddPostCreator('dartWader')

    let state = {
        post: [
            { message: 'My dad', like: '12' },
            { message: 'I wont to see', like: '122' },
            { message: 'I wont to see it', like: '42' },
            { message: 'I see', like: '1' },
            { message: 'I see it ', like: '42' },
            { message: 'I wont to visit this platc', like: '22' }
        ],
    };
    let newPostBody = PostReduser(state, action);

    expect(newPostBody.post.length).toBe(7)


})







