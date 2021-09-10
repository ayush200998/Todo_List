const initialState = []

const listReducer = (state = JSON.parse(localStorage.getItem('lists')) ||initialState  , action) => {
    switch(action.type){
        case 'ADD':
            localStorage.setItem('lists', JSON.stringify([{title: action.payload.title, tags: action.payload.tags, isCompleted: false} ,...state ]))
            return [{title: action.payload.title, tags: action.payload.tags, isCompleted: false} ,...state ]
        
        case 'ALTER_LIST':
            const list = state.find(l => l.title === action.payload.title)
            list.isCompleted = !action.payload.isCompleted
            localStorage.setItem('lists', JSON.stringify([...state]))
            return [...state]
        
        case 'RESET':
            state = []
            localStorage.setItem('lists', JSON.stringify(state))
            return state

        case 'SEARCH':
            console.log(action.payload)
            state = state.filter((list) => list?.tags?.includes(action.payload))
            return [...state]

        default: 
            return state
    }
}

export default listReducer