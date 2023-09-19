
export type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {...state, collapsed: !state.collapsed}
    }
    return state
}