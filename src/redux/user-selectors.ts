import { AppStateType } from "./redux-store"



export const getUser=(state:AppStateType)=>{
    return state.usersPage.users
}
export const getPageSize=(state:AppStateType)=>{
    return state.usersPage.pageSize
}
export const getTotalUsersCount=(state:AppStateType)=>{
    return state.usersPage.totalUsersCount
}
export const getCurrentPage=(state:AppStateType)=>{
    return state.usersPage.currentPage
}
export const getIsLoad=(state:AppStateType)=>{
    return state.usersPage.isLoad
}
export const getFollowingInProgress=(state:AppStateType)=>{
    return state.usersPage.followingInProgress
}