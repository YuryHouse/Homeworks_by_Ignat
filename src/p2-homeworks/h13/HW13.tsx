import React, {useState} from 'react';
import {requestAPI} from './requeat-api'
import style from './HW13.module.css'

export const HW13 = () => {
    const [checkboxStatus, setCheckboxStatus] = useState(false)
    const [request, setRequest] = useState(null)

    function sendRequest(checkboxStatus: boolean) {
        requestAPI.post(checkboxStatus)
            .then(data => {
                setRequest(data)
            }
            )
    }

    return (
        <div className={style.form}>
            <h3 className={style.title}>Homework 13</h3>
            <form>
                <div>
                    <label>{'Is the request successful?'}</label>
                    <input type={"checkbox"} name={'successful'} onClick={() => {setCheckboxStatus(!checkboxStatus)}}/>
                </div>
                <div>
                    <button onClick={() => {sendRequest(checkboxStatus)}}>Send API request</button>
                </div>
            </form>
            <div>
                {request}
            </div>
        </div>
    )
};