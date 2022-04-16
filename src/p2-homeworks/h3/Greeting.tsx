import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string | null// need to fix any
    totalUsers: any// need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={onEnter}
                   onBlur={setNameCallback}
            />
            <button onClick={addUser} disabled={!name} className={s.button}>add</button>
            <span className={s.count}>{totalUsers}</span>
            <div>
                <span className={s.error}>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
