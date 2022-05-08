export type CounterStateType = {
    actualNumber: number
    startNumber: number
    limitNumber: number
}

export type ActionType = IncrimentType | ResetType | SetNumberType;
export type IncrimentType = ReturnType<typeof incrimentAC>;
export type ResetType = ReturnType<typeof resetAC>;

export type SetNumberType = {
    type: 'SET-NUMBER',
    payload: {
        newNumber: number
        whichNumber: 'startNumber' | 'limitNumber'
    }
}

export const initialState: CounterStateType = {
    actualNumber: 0,
    startNumber: 0,
    limitNumber: 5
};


export const counterReducer = (state: CounterStateType = initialState, action: ActionType): CounterStateType => {
    switch (action.type) {
        case "ADD-NUMBER": {
            return {...state, actualNumber: state.actualNumber += 1};
            // return {...state};
        }
        case "RESET": {
            return {...state, actualNumber: state.actualNumber = state.startNumber};
            // return {...state};
        }

        case "SET-NUMBER": {
            if (action.payload.whichNumber === 'startNumber') {
                return {...state, startNumber: action.payload.newNumber};
                // return {...state};
            } else if (action.payload.whichNumber === 'limitNumber') {
                return {...state, limitNumber: action.payload.newNumber};
            } else { return state}
        }

        default:
            return state;
    }
}

export const incrimentAC = () => {
    return {
        type: "ADD-NUMBER",
    } as const
}

export const resetAC = () => {
    return {
        type: "RESET",
    } as const
}

export const setNumberAC = (newNumber: number, whichNumber: string) => {
    return {
        type: "SET-NUMBER",
        payload: {
            newNumber,
            whichNumber
        }
    } as const
}
