import React from 'react';
import style from './Message.module.css';

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string

}

function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>
            <div className={style.avatar}><img alt={''} src={props.avatar} /></div>
            <div className={style.block}>
                <div className={style.text}>
                    <h4>{props.name}</h4>
                    <p>{props.message}</p>
                </div>
                <div className={style.m_time}>
                    <p>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message;
