import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_message, categories_fetch_request, set_products } from '../../actions';
import useAxios from '../../hooks/useAxios';
import { useSearchParams } from 'react-router-dom';

function Filter(props) {

    const categories = useSelector(state => state.categories);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ categoryId, setCategoryId ] = useState(searchParams.get('category') || 0);
    const dispatch = useDispatch();
    const axios = useAxios({includeToken: false});

    useEffect(() => {
        dispatch(categories_fetch_request());
    }, []);

    function handleChange(e){
        setCategoryId(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        axios.get(`/products/?category=${categoryId}`)
        .then(res => {
            dispatch(set_products(res.data));
            setSearchParams({category: categoryId});
        })
        .catch(err => {
            dispatch(add_message({variant: 'danger', title: 'Error when loading products data.'}));
        });
    }

    return <>
        <div className={`w-full mb-5 p-5 bg-black text-white ${props.show ? 'h-80' : 'h-0 p-0'} transition-all duration-300 overflow-hidden`}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="category">Category</label><br />
                <select className="w-40 h-8 text-black form-group cursor-pointer" name="category" value={categoryId} onChange={handleChange}>
                    <option key={0} value="0">All</option>
                    {categories.map(category => {
                        return <option key={category.id} value={category.id}>{category.title}</option>
                    })}
                </select>
                <button type="submit" className="w-40 btn-secondary my-4">Apply</button>
            </form>
        </div>
    </>
}

export default Filter;