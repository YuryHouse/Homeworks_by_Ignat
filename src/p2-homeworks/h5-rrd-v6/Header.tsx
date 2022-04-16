import React from 'react'
import style from "./Header.module.css";
import {NavLink} from "react-router-dom";



function Header() {
    return (
        <div className={style.hamburgerMenu}>
            <input id={style['menu__toggle']} type="checkbox"/>
            <label className={style.menu__btn} htmlFor={style.menu__toggle}>
                <span></span>
            </label>
            <ul className={style.menu__box}>
                <li><NavLink className={style.menu__item} to={'/'}>PRE-JUNIOR</NavLink></li>
                <li><NavLink className={style.menu__item} to={'/junior'}>JUNIOR</NavLink></li>
                <li><NavLink className={style.menu__item} to={'/junior-plus'}>JUNIOR+</NavLink></li>
            </ul>
        </div>
    )
}

export default Header
