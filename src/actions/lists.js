export const addList = (data) => (dispatch) => {
    dispatch({type: 'ADD', payload: data})
}

export const makeChangesInList = (list) => (dispatch) => {
    dispatch({type:'ALTER_LIST', payload: list})
}

export const resetState = () => (dispatch) =>{
    dispatch({type: 'RESET'})
}

export const search = (tag) => (dispatch) => {
    dispatch({type: 'SEARCH', payload: tag})
}