import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Navbar() {
    const Nav = styled.nav`
        background-color: #f0f0f0;
        /* position: fixed; */
        top: 0;
        left: 0;
        right: 0;
        padding: 0 20px;
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 99;
    `;

    const Brand = styled.div`
        font-size: 2em;
        font-family: 'Luxurious Roman', cursive;
    `;

    const NavGroup = styled.ul`
        height: 100%;
        list-style: none;
        display: flex;
        justify-content: between;
        align-items: center;
    `;

    const NavItem = styled.li`
        height: 100%;
        > a, span {
            height: 100%;
            width: 100%;
            position: relative; // for hover effect
            display: flex;
            align-items: center; // center text vertically
            justify-content: center; // center text horizontally
            cursor: default;

            ::after {
                content: '';
                display: block;
                position: absolute; // to position it at the bottom
                left: 0;
                bottom: 0;
                height: 2px;
                width: 0;
                background-color: black;
                transition: width 0.2s ease-out;
            }
            
            &:hover::after {
                width: 100%;
            }
        }

        > a {
            text-decoration: none;
            color: black;
            cursor: pointer;
        }


        &:hover > div { // to show the dropdown menu which is a child of the nav item
            display: flex;
        }
    `;

    const Dropdown = styled.div`
        position: absolute;
        /* width: 70%; */
        padding: 20px;
        display: none;
        background-color: #f0f0f0;
        /* margin-top: 10px; */
        z-index: 99;

    `

    const DropdownCol = styled.div`
        list-style: none;
        width: 150px;
        /* margin: 0; */
    `

    const DropdownColHeader = styled.p`
        font-size: 1.2em;
        font-weight: bold;
    `

    const DropdownItem = styled.li`
        a {
            color: black;
            text-decoration: none;
            ::after {
                content: '';
                display: block;
                left: 0;
                bottom: 0;
                height: 2px;
                width: 0;
                background-color: black;
                transition: width 0.2s ease-out;
            }
            
            &:hover::after {
                width: 100%;
            }
        }
    `

  return <Nav>
      <NavGroup>
            <NavItem>
                <span>Categories</span>
                <Dropdown>
                    <DropdownCol>
                        <DropdownColHeader>Col 1</DropdownColHeader>
                        <DropdownItem><Link to="/category0">category0</Link></DropdownItem>
                        <DropdownItem><Link to="/category1">category1</Link></DropdownItem>
                        <DropdownItem><Link to="/category2">category2</Link></DropdownItem>
                        <DropdownItem><Link to="/category3">category3</Link></DropdownItem>
                        <DropdownItem><Link to="/category4">category4</Link></DropdownItem>
                        <DropdownItem><Link to="/category5">category5</Link></DropdownItem>
                    </DropdownCol>
                    <DropdownCol>
                        <DropdownColHeader>Col 2</DropdownColHeader>
                        <DropdownItem><Link to="/category0">category0</Link></DropdownItem>
                        <DropdownItem><Link to="/category1">category1</Link></DropdownItem>
                        <DropdownItem><Link to="/category2">category2</Link></DropdownItem>
                        <DropdownItem><Link to="/category3">category3</Link></DropdownItem>
                        <DropdownItem><Link to="/category4">category4</Link></DropdownItem>
                        <DropdownItem><Link to="/category5">category5</Link></DropdownItem>
                    </DropdownCol>
                </Dropdown>
            </NavItem>
      </NavGroup>
      <Brand>AURORA</Brand>
      <NavGroup>
            <NavItem>
                <Link to="/cart"><ShoppingCartIcon/></Link>
            </NavItem>
      </NavGroup>
  </Nav>;
}

export default Navbar;