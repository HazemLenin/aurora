const initialState = localStorage.getItem('auth_token') ? localStorage.getItem('auth_token') : null;

function authTokenReducer(state=initialState, action) {
    switch (action.type) {
        case "SET_TOKEN":
            return action.payload;

        case "REMOVE_TOKEN":
            return null;

        default:
            return state;
    }
}

export default authTokenReducer;