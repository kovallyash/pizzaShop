import React from "react";
import "./pizzaBox.css";
import vegetarianoPizza from "../pizzaTitles/vegetariano.png"


const VegetarianoPizza = () =>{
    return(
      <div className="content">
        <div  className="overrlay">
        <img className="content-image"  src={vegetarianoPizza} alt="vegetariano" />
        <div className="content-detalis fadeIn-top">
                        <h3>VEGETARIANO PIZZA</h3>
                        <p>about pizza</p>
                    </div>
                    
        
      </div>
      
      </div>
      
      
        )
}

export default VegetarianoPizza
