import React from 'react';
import MainVideoPage from './MainPageVideo/MainPageVideo';
import {PizzaMenu} from './PizzaMenu/PizzaMenu';
import {BrowserRouter, Routes, Route} from "react-router-dom";


const Pizzeria = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainVideoPage/>}/>
        <Route path="/order" element={<PizzaMenu/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default Pizzeria;
