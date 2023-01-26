import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import NavBar from './components/navBar/NavBar.js';
import Home from './components/home/Home.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js';
import ItemCategoryContainer from './components/itemCategoryContainer/ItemCategoryContainer';
import AboutUs from './components/aboutUs/AboutUs';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';
import NotFound404 from './components/notFound404/NotFound404.js';

import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

    <NavBar/>

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/productos' element={<ItemListContainer greeting="Bienvenidos a Vanilla"/>}/>
      <Route exact path='/productos/:productoName/:productoId' element={<ItemDetailContainer/>}/>
      <Route exact path='/categoria/:categoriaId' element={<ItemCategoryContainer/>}/>
      <Route exact path='/nosotros' element={<AboutUs/>}/>
      <Route exact path='/contacto' element={<Contact/>}/>
      <Route exact path='*' element={<NotFound404/>}/>
    </Routes>
    
    <Footer/>

    </BrowserRouter>
    
    

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();