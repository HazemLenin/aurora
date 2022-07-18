import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Filter from './Filter';
import { products_fetch_request } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

function Products() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const [ showFilter, setShowFilter ] = useState(false);
    const [ searchParams, setSearchParams ] = useSearchParams();

    useEffect(() => {
        dispatch(products_fetch_request(searchParams.get('category') || 0)); // saga action
    }, []);

    return <>
        <div className="px-5 lg:px-52 mt-5">
            <div className="w-full h-10 flex justify-between items-center">
                <h1 className="text-4xl">Products</h1>
                <button
                    className="h-full w-40 bg-black hover:bg-gray-800 text-white transition-all"
                    onClick={e => setShowFilter(!showFilter)}>
                    Filter
                    <FontAwesomeIcon icon={faChevronDown} className={`ml-2 ${showFilter && 'rotate-180'} transition-transform duration-300`} />
                </button>
            </div>
            <Filter show={showFilter} />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4">
                {products.map((product, i) => {
                    return <ProductCard product={product} key={i} />
                })}
            </div>
        </div>
    </>
}

export default Products;