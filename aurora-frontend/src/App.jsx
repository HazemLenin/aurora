import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  Navbar,
  Messages,
  Footer,
  Home,
  Signup,
  Activate,
  ResendActivation,
  ResetPassword,
  ResetPasswordConfirm,
  Login,
  Logout,
  Products,
  Product,
  Cart,
  OrdersHistory,
} from './components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { user_fetch_request } from './actions';

function App() {
  const dispatch = useDispatch();
  const authToken = useSelector(state => state.authToken);

  useEffect(() => {
    // load user if authenticated
    if (authToken) {
      dispatch(user_fetch_request(authToken)); // saga action
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Messages />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/activate/:uid/:token" element={<Activate />} />
          <Route exact path="/resend-activation" element={<ResendActivation />} />
          <Route exact path="/password/reset" element={<ResetPassword />} />
          <Route exact path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/cart" element={authToken ? <Cart /> : <Navigate replace to="/login"/>} />
          <Route exact path="/orders-history" element={authToken ? <OrdersHistory /> : <Navigate replace to="/login"/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
);
}

export default App;
