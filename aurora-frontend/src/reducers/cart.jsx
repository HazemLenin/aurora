function cartReducer(state=null, action) {
    switch (action.type) {
        case 'SET_CART':
            return action.payload;

        case 'REMOVE_CART':
            return null;

        default:
            return state;
    }
}

export default cartReducer;