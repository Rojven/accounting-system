const initialState = {
    users: [],
    user: {},
    admin: {},
    loading: false
}

export const usersReducers = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN_START":
            return {
                ...state,
                admin: action.payload,
                loading: false
            }
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'DELETE_USER':
            return {
                ...state,
                loading: false
            }
        case 'ADD_USER':
            return {
                ...state,
                loading: false
            }
        case 'GET_USER':
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'UPDATE_USER': 
            return {
                ...state,
                loading: false
            }
        case 'SEARCH_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        default:
            return state;
    }
}