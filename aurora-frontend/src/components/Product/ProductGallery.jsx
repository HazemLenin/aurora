import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function ProductGallery() {
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
  const product = useSelector(state => state.product);

  return <>
    <div className="flex flex-col justify-between items-center gap-x-4 w-full md:w-3/5 h-[500px]">
      <img className="block h-4/5" src={product?.images[currentImageIndex].image} alt={`${product?.title} image`} />
      {/* <div className="block w-full h-4/5 bg-gray-300"></div> */}
      <div className="flex justify-between items-end w-full h-1/5">
        {product?.images?.map((image, i) => {
          return <button key={i} className={`h-16 w-16 ${i === currentImageIndex && "border-2 border-black"}`}>
            <img className="h-full" src={image.image} alt={`${product?.title} image`} onClick={e => setCurrentImageIndex(i)} />
          </button>
        })}
      </div>
    </div>
  </>
}

export default ProductGallery;