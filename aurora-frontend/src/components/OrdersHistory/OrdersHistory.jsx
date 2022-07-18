import React, { useEfect} from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orders_fetch_request } from '../../actions';

function OrdersHistory() {
    const orders = useSelector(state => state.orders);
    const authToken = useSelector(state => state.authToken);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orders_fetch_request(authToken))
    }, []);

    return <>
        <div className="px-5 lg:px-52 mt-12">
            <h1 className="text-4xl">Orders history</h1>
            {orders?.length > 0 && <table className="w-full">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => {
                        return <tr key={order.id}>
                            <td>{order.ordered_on}</td>
                            <td>{order.total_price}</td>
                        </tr>
                    })}
                </tbody>   
            </table>}
        </div>
    </>
}

export default OrdersHistory;