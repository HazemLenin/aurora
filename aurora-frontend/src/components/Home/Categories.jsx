import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  return <section className="p-5">
    <h1 style={{fontSize: "3rem"}}>Categories</h1>
    <div className="flex flex-wrap justify-around mt-5 gap-5">
      <div className="category-card">
        <Link to="/products?category=1">
          <h2>Jeans</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
      </div>
      <div className="category-card">
        <Link to="/products?category=2">
          <h2>Hoodies</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
      </div>
      <div className="category-card">
        <Link to="/products?category=3">
          <h2>Perfumes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
      </div>
    </div>
  </section>;
}

export default Categories;
