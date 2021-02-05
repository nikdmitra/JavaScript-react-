import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';



const Header = (props) => {
    return (

        <header className={s.header}>

            <img src="https://m.blog.hu/ma/marketingkepzes/image/photo_40320_20150822.jpg" />
            <div className={s.pirat}>Для истинных ценителей красного моря</div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}-<button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    );
}
export default Header;