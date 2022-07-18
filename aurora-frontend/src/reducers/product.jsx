function productReducer(state=null, action) {
    switch (action.type) {
        case 'SET_PRODUCT':
            return action.payload;

        case 'REMOVE_PRODUCT':
            return null;

        default:
            return state;
    }
}

export default productReducer;