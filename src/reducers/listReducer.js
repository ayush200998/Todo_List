const initialState = JSON.parse(localStorage.getItem('lists'))
const emptyState = {
    pending: [],
    completed: [],
}

const listReducer = (state = initialState || {pending: [], completed: []}, action) => {
    switch(action.type){
        case 'ADD':
            localStorage.setItem('lists', JSON.stringify({...state, pending:[action?.payload, ...state.pending], completed: [...state.completed]}))
            return {...state, pending:[action.payload, ...state.pending,], completed:[...state.completed]}

        case 'ALTER_LIST':
            const filteredPending = state.pending.filter((list) => list !== action.payload)
            localStorage.setItem('lists', JSON.stringify({...state, pending: [...filteredPending], completed:[action.payload, ...state.completed],}))
            return {
                ...state,
                pending: [...filteredPending], 
                completed: [action.payload, ...state.completed],
            }
        
        case 'RESET':
            state = emptyState
            localStorage.setItem('lists', JSON.stringify(state))
            return state

        default: 
            return state
    }
}

export default listReducer