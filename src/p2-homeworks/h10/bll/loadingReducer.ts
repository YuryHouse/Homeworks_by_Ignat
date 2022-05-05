const initState = {
 isLoading: false
}

export const loadingReducer = (state = initState, action:  loadingReducerType): typeof initState => { // fix any
    switch (action.type) {
        case 'SHOW-LOADING': {
            return {...state, isLoading: action.payload.isLoading}
        }
        default: return state
    }
}

type loadingReducerType = loadingACType

type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'SHOW-LOADING',
        payload: {isLoading}
    } as const
}