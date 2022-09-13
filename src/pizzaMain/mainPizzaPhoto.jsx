import peperoni from "../pizzaMain/PeperoniMain.png";
import cheesy from "./CheeseMain.png";
import italiano from "./ItalianoMain.png";
import vegetariano from "./VegetarianoMain.png";
import "./mainPizzaPhoto.css";


const PizzaMainPagePhoto = () => {
    return(
        <div className="mainPage">
            
            <img className="cheesyPizaa" src={cheesy} alt='cheesy'/>
            <img className="vegetarianoPizza" src={vegetariano} alt='vegetariano'/>
            <img className="peperoniPizza" src={peperoni}  alt='peperoni'/>
            <img className="italianoPizza" src={italiano} alt='italiano'/>
            
        </div>
    )
}

export default PizzaMainPagePhoto;