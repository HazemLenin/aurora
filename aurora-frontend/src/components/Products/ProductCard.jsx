import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {

    return <>
        <Link to={`/products/${props.product.id}`} className="flex flex-col justify-between bg-gray-200 hover:bg-gray-300 transition-all h-80 p-3">
            <h3>{props.product.title}</h3>
            <img className="h-44 border-2 border-black mx-auto" src={props.product.images[0]?.image} alt={props.product.title + " image"} />
            <p>{props.product.description.substring(0, 50)}...</p>
            <p>Price: {props.product.price}$</p>
        </Link>
    </>
}

export default ProductCard;