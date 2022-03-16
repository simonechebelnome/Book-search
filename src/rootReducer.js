const initState = {
    book: []
}

const rootReducer = (state = initState, action) => {
    if(action.type == 'ADD_BOOK'){
        return {
            book: action.book
        }
    }
    return state;
}

export default rootReducer;