import React from "react";
import "./pizzaBox.css";
import peperoniPizza from "../pizzaTitles/peperoniMain.png"


const PeperoniPizza = () =>{
    return(
      <div className="content">
      <div  className="overrlay">
        <img className="content-image"  src={peperoniPizza} alt="peperoni" />
        <div className="content-detalis fadeIn-top">
                        <h3>PEPERONI PIZZA</h3>
                        <p>about pizza</p>
                    </div>
      </div>
      </div>
        )
}

export default PeperoniPizza
