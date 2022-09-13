import React from 'react';
import ChickenPizza from '../pizzas/italiano';
import ChiliPizza from '../pizzas/cheasy';
import PeperoniPizza from '../pizzas/peperoni';
import VegetarianoPizza from '../pizzas/vegetariano';
import '../mainpage.css';
import PizzaMainPagePhoto from '../pizzaMain/mainPizzaPhoto';
import AppHeader from '../Header/Header';
import AppFooter from '../Footer/Footer';

export const PizzaMenu = () => {

    return (

    <div className="pizza">
      <AppHeader />
    
      <div className='app_body'>
        <PizzaMainPagePhoto />
    <div className='about_pizzas'>
      <div><ChickenPizza />
      <div className="OrderButt">
          <button className='butn'>Order Me</button>
        </div></div>
      <div><ChiliPizza />
      <div className="OrderButt">
          <button className='butn'>Order Me</button>
        </div></div>
      <div><PeperoniPizza />
      <div className="OrderButt">
          <button className='butn'>Order Me</button>
        </div></div>
      <div> <VegetarianoPizza />
      <div className="OrderButt">
          <button className='butn'>Order Me</button>
        </div></div>
    </div>
      </div>
      <AppFooter />
      </div>

    );
}