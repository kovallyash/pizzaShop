import React from "react";
import "./pizzaBox.css";
import cheesyPizza from "../pizzaTitles/chese.png"


const CheasyPizza = () =>{
    return(
      <div className="content">
        <div  className="overrlay">
          <img className="content-image" src={cheesyPizza} alt="cheasy" />
          <div className="content-detalis fadeIn-top">
                        <h3>CHEESY PIZZA</h3>
                        <p>Only one i can say about it. It is CHEEEEEEEEESY. We made this pizza with about twenty different
                          kinds of cheese, and of course, we also sprinkled it with extra parmesan on top.
                        </p>
                    </div>
          
        </div>
        </div>
        
        
        )
}

export default CheasyPizza
