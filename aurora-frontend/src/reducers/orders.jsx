function ordersReducer(state=[], action) {
    switch (action.type) {
        case 'SET_ORDERS':
            return action.payload;

        case 'REMOVE_ORDERS':
            return [];

        default:
            return state;
    }
}

export default ordersReducer;