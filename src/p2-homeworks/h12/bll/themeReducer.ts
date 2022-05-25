import {loadingAC} from "../../h10/bll/loadingReducer";

const initState = {
    theme: 'light',
    otherThemes: ['light', 'dark', 'gold', 'green', 'red', 'violet']
};

export type StateType = {
    theme: string;
    otherThemes: string[]
}

export const themeReducer = (state = initState, action: themeReducerType): StateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, theme: action.payload.theme}
        }
        default:
            return state;
    }
};

type themeReducerType = changeThemeACType

type changeThemeACType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme: string) => {
    return {
        type: 'CHANGE-THEME',
        payload: {theme}
    } as const
}