/* eslint-disable react/jsx-no-undef */
import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Router } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Product from './pages/ProductPage';

function App() {
  return (
        <Router>
          <Routes>
            <Route path='/test' element={<ProductList />}/> 
            <Route path="/product/:id" element={<Product/>} />
          </Routes>
            
        </Router>
  );
}

export default App;
