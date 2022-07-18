import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    add_message,    
    set_user, user_fetch_request,
    set_products, products_fetch_request,
    set_categories, categories_fetch_request,
    set_product, product_fetch_request,
    set_cart, cart_fetch_request,
    set_orders, orders_fetch_request,
} from './actions';

// Here we are outside react so we don't use hooks of react-redux

function* fetchUser(action) {
    try {
        const { data } = yield call(axios.get, '/users/me/', {headers: {Authorization: `Token ${action.payload}`}});
        yield put(set_user(data));
    } catch (e) {
        yield put(add_message({ variant: 'danger', title: 'Error when loading user data.' }));
    }
}

function* fetchProducts(action) {
    try {
        var url = '/products/';
        if (action.payload) {
            url += '?category=' + action.payload
        }
        const { data } = yield call(axios.get, url);
        yield put(set_products(data));
    } catch (e) {
        yield put(add_message({ variant: 'danger', title: 'Error when loading products data.'}))
    }
}

function* fetchCategories(action) {
    try {
        const { data } = yield call(axios.get, '/categories/');
        yield put(set_categories(data));
    } catch (e) {
        yield put(add_message({ variant: 'danger', title: 'Error when loading categories data.'}))
    }
}

function* fetchProduct(action) {
    try {
        const { data } = yield call(axios.get, `/products/${action.payload}/`);
        yield put(set_product(data));
    } catch (e) {
        yield put(add_message({ variant: 'danger', title: 'Error when loading product data.'}))
    }
}

function* fetchCart(action) {
    try {
        const { data } = yield call(axios.get, "/orders/", {headers: {Authorization: `Token ${action.payload}`}});
        yield put(set_cart(data[data.length - 1]));
    } catch (e) {
        yield put(add_message({ variant: 'danger', title: 'Error when loading cart data.'}))
    }
}

function* fetchOrders(action) {
    try {
        let { data } = yield call(axios.get, "/orders/", {headers: {Authorization: `Token ${action.payload}`}});
        data.pop();
        yield put(set_orders(data));
    } catch (e) {
        yield put(add_message({ variant: 'danger', title: 'Error when loading orders data.'}))
    }
}

function* auroraSaga() {
    // this is like async reducer but in saga context
    yield takeLatest(user_fetch_request().type, fetchUser); // take latest action with that type and execute this function
    yield takeLatest(products_fetch_request().type, fetchProducts);
    yield takeLatest(categories_fetch_request().type, fetchCategories);
    yield takeLatest(product_fetch_request().type, fetchProduct);
    yield takeLatest(cart_fetch_request().type, fetchCart);
    yield takeLatest(orders_fetch_request().type, fetchOrders);
}

export default auroraSaga;