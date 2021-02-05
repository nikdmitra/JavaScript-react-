import { NavLink } from 'react-router-dom';
import Dialogitem from './SMS/Dialogitem';

import Dialogsms from './SMS/Dialogsms';
import React from "react"
import { AddSMS} from '../../redux/Messandes-reduser ';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import store from '../../redux/redux-store';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';




let mapStateToProps = (state:any) => {
    return {
        Messandes: state.Messandes,
        newsms:state.Messandes.newsms,
        }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
       AddSMSka: (newMessageBody:any) => {
            dispatch(AddSMS(newMessageBody));

        }

    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)