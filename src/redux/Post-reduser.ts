import { profileApi, usersApi } from "../api/userApi";
import React from "react";
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk"

import { AppStateType } from "./redux-store"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW = 'UPDATE-NEW'
const PROFILE_NEW = 'PROFILE_NEW'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO = 'SAVE_PHOTO'


type PostType = {
    message: string
    like: number
}
type ProfileType = {
    photos: any
}

let initialState = {


    post: [
        { message: 'My dad', like: 12 },
        { message: 'I wont to see', like: 122 },
        { message: 'I wont to see it', like: 42 },
        { message: 'I see', like: 1 },
        { message: 'I see it ', like: 42 },
        { message: 'I wont to visit this platc', like: 22 }
    ] as Array<PostType>,

    profile: null as ProfileType | null,
    status: '',
    newPostText: ' ',

}

export type InitialStateType = typeof initialState;


const PostReduser = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostBody,
                like: 0
            };
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: ' '
            };

        }





        case PROFILE_NEW: {
            return {
                ...state,
                profile: action.profile
            };




        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };




        }

        case SAVE_PHOTO: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            };




        }




        default:
            return state;
    }
}

type ActionType = AddPostActionCreatorTipe | ProfileActionTipe | SetStatusActionTipe
    | SavePhotoActionTipe

type AddPostActionCreatorTipe = {
    type: typeof ADD_POST
    newPostBody: string
}
export const AddPostCreator = (newPostBody: string): AddPostActionCreatorTipe => {
    return {
        type: ADD_POST, newPostBody
    }
}
type ProfileActionTipe = {
    type: typeof PROFILE_NEW
    profile: ProfileType
}
export const profileNew = (profile: ProfileType): ProfileActionTipe => ({ type: PROFILE_NEW, profile })


type SetStatusActionTipe = {
    type: typeof SET_STATUS
    status: string
}

export const setStatus = (status: string): SetStatusActionTipe => ({ type: SET_STATUS, status })

type SavePhotoActionTipe = {
    type: typeof SAVE_PHOTO
    photos: any
}

export const savePhotoSuccess = (photos: any): SavePhotoActionTipe => ({ type: SAVE_PHOTO, photos })


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>

export const getUserProfile = (userId: number): ThunkType => async (dispatch: any) => {
    let response = await profileApi.getProfile(userId)
    dispatch(profileNew(response.data))
}


export const getUserStatus = (userId: any): ThunkType => async (dispatch: any) => {
    let response = await profileApi.getStatus(userId)

    dispatch(setStatus(response.data))



}



export const updateStatus = (status: any): ThunkType => async (dispatch: any) => {
    let response = await profileApi.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }

}
export const savePhoto = (file: any): ThunkType => async (dispatch: any) => {

    let response = await profileApi.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};




export const saveProfile = (profile: any): ThunkType => {
    return async (dispatch: any, getState: any) => {
        const userId = getState().auth.userId
        let response = await profileApi.saveProfile(profile)

        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId))
        }

    }
};




export default PostReduser;