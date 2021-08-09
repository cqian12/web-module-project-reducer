//export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'
export const M_PLUS = 'M_PLUS'
export const M_R = 'M_R'
export const M_C = 'M_C'

// export const addOne = () => {
//     return({type:ADD_ONE});
// }

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const applyOp = (op) => {
    return({type:CHANGE_OPERATION, payload:op});
}

export const applyClear = () => {
    return ({type:CLEAR_DISPLAY})
}

export const applyMP = () => {
    return ({type:M_PLUS})
}

export const applyMR = () => {
    return ({type:M_R})
}

export const applyMC = () => {
    return ({type:M_C})
}