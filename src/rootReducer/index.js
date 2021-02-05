const initialState = {
    isDarkModeOpen: false,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'HANDLE_DARK_MODE':
            return {...state, isDarkModeOpen: action.payload.isDarkModeOpen}
        default:
            return state;
    }
}

export default rootReducer;