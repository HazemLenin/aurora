import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { product_fetch_request } from '../../actions';
import ProductGallery from './ProductGallery';
import ProductDetails from './ProductDetails';

function Product() {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product);
  const params = useParams();

  useEffect(() => {
    dispatch(product_fetch_request(params.id)); // saga action
  }, []);

  return <>
    <div className="px-5 lg:px-52 mt-12 mb-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-10">
        <ProductGallery />
        <ProductDetails />
      </div>
    </div>
  </>
}

export default Product;