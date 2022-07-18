import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_message, cart_fetch_request } from '../../actions';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const authToken = useSelector(state => state.authToken);
    const axios = useAxios();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(cart_fetch_request(authToken));
    }, []);

    function handlePurchase(e) {
        axios.post('/purchase/', {})
        .then(res => {
            dispatch(add_message({variant: 'success', title: 'Purchased successfully.'}));
            navigate('/');
        })
        .catch(err => {
            dispatch(add_message({variant: 'danger', title: 'Error happened while purchasing.'}));
        });
    }

    return <>
        <div className="px-5 lg:px-52 mt-12">
            <h1 className="text-4xl">Cart</h1>
            items:
            {cart?.items?.length ?
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cart?.items?.map(item => {
                        return <tr key={item.id}>
                            <td><Link className="text-blue-500 underline" to={`/products/${item.product.id}`}>{item.product.title}</Link></td>
                            <td>{item.quantity}</td>
                        </tr>
                    })}
                        
                    </tbody>
                </table>
            :
                <h2>No Items</h2>
            }
            Total price: {cart?.total_price}
            {cart?.items?.length > 0 && <button className="btn-primary h-10 w-40" onClick={handlePurchase}>Purchse</button>}
        </div>
    </>
}

export default Cart;