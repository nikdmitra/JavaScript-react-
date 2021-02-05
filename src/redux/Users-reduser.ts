import { ThunkAction } from "redux-thunk"
import { usersApi } from "../api/userApi"
import { AppStateType } from "./redux-store"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const IS_LOAD = 'IS_LOAD'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'const TOGGLE_IS_FOLLOWING_PROGRESS'

export type UserType = {
    id: number
    name: string
    status: string
    photos: any
}


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoad: true,
    followingInProgress: [] as Array<number>,
};

type InitialStateType = typeof initialState

const usersReduser = (state: any = initialState, action: ActionTipe): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u;
                })

            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u;
                })

            };
        case SET_USERS: {
            return { ...state, users: action.users };
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage };
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount };

        }
        case IS_LOAD: {
            return { ...state, isLoad: action.isLoad };

        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isLoad
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: any) => id != action.userId)
            };

        }

        default:
            return state;
    }
}

type ActionTipe = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType | CurrentPageActionType |
    SetUsersTotalActionType | IsLoadsasActionType | ToggleActionType


type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId })


type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId })


type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users })


type CurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): CurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })


type SetUsersTotalActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setUsersTotalCount = (totalUsersCount: number): SetUsersTotalActionType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })


type IsLoadsasActionType = {
    type: typeof IS_LOAD
    isLoad: boolean
}
export const isLoadsas = (isLoad: boolean): IsLoadsasActionType => ({ type: IS_LOAD, isLoad })


type ToggleActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    userId: number
    isLoad: boolean
}
export const toggleFollowingProgress = (isLoad: boolean, userId: number): ToggleActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isLoad, userId })

 type ThunkType=ThunkAction<Promise<void>, AppStateType, unknown, ActionTipe>

export const getUsers = (currentPage:number, pageSize: number):ThunkType => {
    return async (dispatch: any) => {
        dispatch(isLoadsas(true));
        let data = await usersApi.getUsers(currentPage, pageSize)
        dispatch(isLoadsas(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersTotalCount(data.totalCount))
    }
}

export const follow = (userId: number):ThunkType => {
    return async (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await usersApi.follow(userId)
        if (response.data.resultCode == 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId));
    }
}

export const unfollow = (userId: number):ThunkType => {
    return async (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await usersApi.unfollow(userId)

        if (response.data.resultCode == 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId));
    }
}
export default usersReduser;