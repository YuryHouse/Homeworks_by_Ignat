import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import style from './HW10.module.css'
function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType>(state => state.loading.isLoading)
    const dispatch = useDispatch()


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    }

    return (
        <div className={style.hwStyle}>
            <hr/>
            <h4 className={style.hwTitle}>homeworks 10</h4>
            {loading
                ? (
                    <div className={style.preloader}>
                        <div className={style.preloaderImage}></div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            <hr/>
        </div>
    )
}

export default HW10
