import React from "react";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile } from "../../redux/Post-reduser";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
    refreshProfile() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
                ;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (

            <Profile {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status} updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.Post.profile,
        status: state.Post.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth


    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
