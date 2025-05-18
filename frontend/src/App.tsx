/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
// import { Router } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import ProductPage from './pages/ProductPage/ProductPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
        <Router>
          <Routes>
            <Route path='/test' element={<ProductList />}/> 
            <Route path="/product/:id" element={<ProductPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/favourites' element={<FavouritesPage/>}/>
            <Route path='/products' element={<ProductsPage/>}/>
            <Route path='/' element={<MainPage/>}/>
          </Routes>
            
        </Router>
  );
}

export default App;
