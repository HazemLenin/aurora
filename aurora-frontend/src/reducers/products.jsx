function productsReducer(state=[], action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return action.payload;

        case 'REMOVE_PRODUCTS':
            return [];

        default:
            return state;
    }
}

export default productsReducer;