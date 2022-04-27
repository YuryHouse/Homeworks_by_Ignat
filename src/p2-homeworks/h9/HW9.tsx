import React from 'react'
import Clock from './Clock'
import style from './HW9.module.css'

function HW9() {
    return (
        <div className={style.hwStyle}>
            <hr/>
            <h4 className={style.hwTitle}>homeworks 9</h4>

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
