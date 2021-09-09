export const addList = (input) => (dispatch) => {
    dispatch({type: 'ADD', payload: input})
}

export const makeChangesInList = (list) => (dispatch) => {
    dispatch({type:'ALTER_LIST', payload: list})
}

export const resetState = () => (dispatch) =>{
    console.log('reset activated')
    dispatch({type: 'RESET'})
}