import React from 'react';
// import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {

    const authToken = useSelector(state => state.authToken);
    const location = useLocation();

    // const NavItem = styled.li`
    //     height: 100%;
    //     > a, span {
    //         height: 100%;
    //         width: 100%;
    //         position: relative; // for hover effect
    //         display: flex;
    //         align-items: center; // center text vertically
    //         justify-content: center; // center text horizontally
    //         cursor: default;

    //         ::after {
    //             content: '';
    //             display: block;
    //             position: absolute; // to position it at the bottom
    //             left: 0;
    //             bottom: 0;
    //             height: 2px;
    //             width: 0;
    //             background-color: black;
    //             transition: width 0.2s ease-out;
    //         }
            
    //         &:hover::after {
    //             width: 100%;
    //         }
    //     }

    //     > a {
    //         text-decoration: none;
    //         color: black;
    //         cursor: pointer;
    //     }


    //     &:hover > div { // to show the dropdown menu which is a child of the nav item
    //         display: flex;
    //     }
    // `;

    // const Dropdown = styled.div`
    //     position: absolute;
    //     padding: 20px;
    //     display: none;
    //     background-color: #f0f0f0;
    //     z-index: 99;

    // `

    // const DropdownCol = styled.ul`
    //     list-style: none;
    //     width: 150px;
    // `

    // const DropdownColHeader = styled.p`
    //     font-size: 1.2em;
    //     font-weight: bold;
    // `

    // const DropdownItem = styled.li`
    //     a {
    //         color: black;
    //         text-decoration: none;
    //         ::after {
    //             content: '';
    //             display: block;
    //             left: 0;
    //             bottom: 0;
    //             height: 2px;
    //             width: 0;
    //             background-color: black;
    //             transition: width 0.2s ease-out;
    //         }
            
    //         &:hover::after {
    //             width: 100%;
    //         }
    //     }
    // `

    return <>
        <nav className="w-full h-16 bg-gray-200 px-5 flex justify-between items-center z-50">
            {/* <ul className="nav-group">
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
            </ul> */}
            <ul className="nav-group">
                <li className={`nav-item ${location.pathname === '/products' && ' active'}`}><Link to="/products">Products</Link></li>
            </ul>
            <ul className="nav-group">
                <li className={`nav-item ${location.pathname === '/' && ' active'}`}><Link to="/" className="brand">aurora</Link></li>
            </ul>
            <ul className="nav-group">
                    {authToken === null ?
                        <>
                            <li className={`nav-item ${location.pathname === '/signup' && ' active'}`}>
                                <Link to="/signup">Singup</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/login' && ' active'}`}>
                                <Link to="/login">Login</Link>
                            </li>
                        </>
                    :
                    <>
                            <li className={`nav-item ${location.pathname === '/orders-history' && ' active'}`}>
                                <Link to="/orders-history">Orders History</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/cart' && ' active'}`}>
                                <Link to="/cart">Cart</Link>
                            </li>
                            <li className={`nav-item ${location.pathname === '/logout' && ' active'}`}>
                                <Link to="/logout">Logout</Link>
                            </li>
                        </>
                        
                    }
            </ul>
        </nav>
    </>
}

export default Navbar;