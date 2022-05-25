import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, StateType} from './bll/themeReducer'
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some'];


function HW12() {
    const {theme, otherThemes} = useSelector<AppStoreType, StateType>(state => state.otherThemes)
    const dispatch = useDispatch()
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeAC(e.currentTarget.value))
    }

    return (
        <div className={s.hwStyle}>
            <div className={s[theme]}>
                <hr/>
                <h4 className={s.hwTitle}>homework 12</h4>
                <span className={s[theme + '-text']}>
                Choose Your Favorite Color:
            </span>
                <div>
                    <SuperSelect
                        onChange={onChangeCallback}
                        options={otherThemes}
                        value={theme}
                    />
                </div>
                <div>
                    <SuperRadio
                        onChange={onChangeCallback}
                        name={'radio'}
                        options={otherThemes}
                        value={theme}
                    />
                </div>

                <hr/>
            </div>
        </div>
    );
}

export default HW12;
