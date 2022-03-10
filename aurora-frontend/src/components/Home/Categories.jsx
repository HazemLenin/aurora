import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoriesGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
`;

const CategoryCard = styled.div`
  width: 300px;
  height: 400px;
  padding: 10px;
  color: white;
  background: darkgrey url(${props => props.image}) no-repeat center;
  background-size: cover;
  background-blend-mode: multiply;
  transition: transform .2s ease-out;
  > a {
    text-decoration: none;
    color: white;
    width: 100%;
    height: 100%;
    display: block;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

function Categories() {
  return <div style={{padding: "20px"}}>
    <h1 style={{fontSize: "3rem"}}>Categories</h1>
    <CategoriesGroup>
      <CategoryCard image="https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        <Link to="/category1">
          <h2>Category 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
      </CategoryCard>
      <CategoryCard image="https://images.pexels.com/photos/10509521/pexels-photo-10509521.jpeg?cs=srgb&dl=pexels-mavluda-tashbaeva-10509521.jpg&fm=jpg">
        <Link to="/category2">
          <h2>Category 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
      </CategoryCard>
      <CategoryCard image="https://images.pexels.com/photos/4938265/pexels-photo-4938265.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4938265.jpg&fm=jpg">
        <Link to="/category3">
          <h2>Category 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Link>
      </CategoryCard>
    </CategoriesGroup>
  </div>;
}

export default Categories;
