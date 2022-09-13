import React from "react";
import "./pizzaBox.css";
import italianoPizza from "../pizzaTitles/ItalianoTitle.png"



const ItalianoPizza = () => {
    return(
      <div className="content">
        <div  className="overrlay">
        <img className="content-image"  src={italianoPizza} alt="italiano" />
        <div className="content-detalis fadeIn-top">
                        <h3>ITALIANO PIZZA</h3>
                        <p>  Tasty pizza made on thin dough with big amount of flavorsome chicken,
        white sause, pickled cucumbers, onion and a little bit mushroms.</p>
                    </div>
        
      </div>
      </div>
    )
}

export default ItalianoPizza
