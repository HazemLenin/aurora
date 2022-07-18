import messagesReducer from './messages';
import authTokenReducer from './authToken';
import userReducer from './user';
import productsReducer from './products';
import categoriesReducer from './categories';
import productReducer from './product';
import cartReducer from './cart';
import ordersReducer from './orders';

import { combineReducers } from "redux";

const allReducers = combineReducers({
    messages: messagesReducer,
    authToken: authTokenReducer,
    user: userReducer,
    products: productsReducer,
    categories: categoriesReducer,
    product: productReducer,
    cart: cartReducer,
    orders: ordersReducer,
});

export default allReducers;