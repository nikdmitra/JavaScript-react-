import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setUsersTotalCount, isLoadsas, getUsers } from "../../redux/Users-reduser";
import Users from "./Users";
import axios from "axios";
import Preloader from "../common/preloader/preloader";
import { usersApi } from "../../api/userApi";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { getPageSize, getUser, getTotalUsersCount, getCurrentPage, getIsLoad, getFollowingInProgress } from "../../redux/user-selectors";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isLoad: boolean
    totalUsersCount: number
    users: any
    followingInProgress: Array<number>

}

type MapDispatchPropsType = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}

type OnPropsType = {
    pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OnPropsType






class UsersAPI extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChaned = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <div>
            {this.props.isLoad ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChaned={this.onPageChaned}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </div>

    }
}



let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoad: getIsLoad(state),
        followingInProgress: getFollowingInProgress(state)

    }
}




export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OnPropsType, AppStateType>(mapStateToProps, { follow, unfollow, setCurrentPage, getUsers }),
    withAuthRedirect
)(UsersAPI)
