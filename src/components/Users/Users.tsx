import axios from "axios";
import React, { useState } from "react";
import styles from './Users.module.css';

import userPhoto from '../../asets/images/unnamed.png'

import { NavLink } from "react-router-dom";

import cn from "classnames"
import Pagenator from "../common/Pagenator/Pagenator";




let Users = (props:any) => {

    return (
        <div>
            <Pagenator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onPageChaned={props.onPageChaned}
            />
            {
                props.users.map((u:any) => <div className={styles.userFlex} key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/Стена/' + u.id}>
                                < img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed

                                ? <button
                                    disabled={

                                        props.followingInProgress.some((id:any) => id === u.id)}
                                    onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>

                                : <button
                                    disabled={props.followingInProgress.some((id:any) => id === u.id)}
                                    onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>

                            }
                        </div>
                    </span>
                    <span className={styles.userFlex2} >
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div >
    )
}


export default Users;