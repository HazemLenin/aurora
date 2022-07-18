// messages

export function add_message(data) {
    return {
        type: 'ADD_MESSAGE',
        payload: data
    }
}

export function remove_messages() {
    return {
        type: 'REMOVE_MESSAGES',
    }
}

// Token

export function set_token(data) {
    return {
        type: 'SET_TOKEN',
        payload: data
    }
}

export function remove_token() {
    return {
        type: 'REMOVE_TOKEN'
    }
}


// User

export function user_fetch_request(data) {
    return {
        type: 'USER_FETCH_REQUEST',
        payload: data
    }
}

export function set_user(data) {
    return {
        type: 'SET_USER',
        payload: data
    }
}

export function remove_user() {
    return {
        type: 'REMOVE_USER'
    }
}

// Products

export function products_fetch_request(data) {
    return {
        type: 'PRODUCTS_FETCH_REQUEST',
        payload: data
    }
}

export function set_products(data) {
    return {
        type: 'SET_PRODUCTS',
        payload: data
    }
}

export function remove_products() {
    return {
        type: 'REMOVE_PRODUCTS'
    }
}

// Categories

export function categories_fetch_request() {
    return {
        type: 'CATEGORIES_FETCH_REQUEST',
    }
}

export function set_categories(data) {
    return {
        type: 'SET_CATEGORIES',
        payload: data
    }
}

export function remove_categories() {
    return {
        type: 'REMOVE_CATEGORIES'
    }
}

// Product

export function product_fetch_request(data) {
    return {
        type: 'PRODUCT_FETCH_REQUEST',
        payload: data
    }
}

export function set_product(data) {
    return {
        type: 'SET_PRODUCT',
        payload: data
    }
}

export function remove_product() {
    return {
        type: 'REMOVE_PRODUCT'
    }
}

// Cart

export function cart_fetch_request(data) {
    return {
        type: 'CART_FETCH_REQUEST',
        payload: data
    }
}

export function set_cart(data) {
    return {
        type: 'SET_CART',
        payload: data
    }
}

export function remove_cart() {
    return {
        type: 'REMOVE_CART'
    }
}

// Orders

export function orders_fetch_request(data) {
    return {
        type: 'ORDERS_FETCH_REQUEST',
        payload: data
    }
}

export function set_orders(data) {
    return {
        type: 'SET_ORDERS',
        payload: data
    }
}

export function remove_orders() {
    return {
        type: 'REMOVE_ORDERS'
    }
}