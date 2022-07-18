import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAxios from '../../hooks/useAxios';
import { add_message, set_cart } from '../../actions';

function ProductDetails() {
    const product = useSelector(state => state.product);
    const authToken = useSelector(state => state.authToken);
    const dispatch = useDispatch();
    const [ quantity, setQuantity ] = useState(1);
    const axios = useAxios();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('/add-to-cart/', {product: product?.id, quantity: quantity})
        .then(res => {
            dispatch(add_message({variant: 'success', title: 'Product added to cart.'}));
            dispatch(set_cart(res.data));
        })
        .catch(err => {
            dispatch(add_message({variant: 'danger', title: 'Error while adding product to cart.'}));
        });
    }

    function handleChange(e) {
        setQuantity(e.target.valueAsNumber);
    }

    return <>
        <div className="flex flex-col h-[500px] justify-between w-full md:w-2/5">
            <h1 className="text-4xl mb-5">{product?.title}</h1>
            <p className="text-gray-500">{product?.description?.substring(0, 240)}</p>
            <h2 className="text-3xl">Category: {product?.category.title}</h2>
            <h2 className="text-3xl">Price: {product?.price}$</h2>
            {authToken && <form className="flex w-full h-12 justify-between items-center gap-x-4" onSubmit={handleSubmit}>
                <button type="submit" className="btn-primary h-full w-3/4">Add To Cart</button>
                <input type="number" value={quantity} onChange={handleChange} min="1" className="w-1/4 h-full px-2 border-2 border-black" />
            </form>}
        </div>
    </>
}

export default ProductDetails;