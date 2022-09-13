import React from 'react';
import mainPizzaVideo from './videoplayback.mp4';
import './MainPageVideo.css'
import {NavLink} from "react-router-dom";


const MainVideoPage = () =>{
    return(
        <div className='mainContainer'>
            <div className="videoloop">
            <video src={mainPizzaVideo} autoPlay loop muted />
            <div className='mainContent'>
                <h1>Welcome to PizzaPaprica</h1>
                <p>Enjoy taste of delicious pizza made according to real Italian recipes </p>
                <NavLink to="/order" >
                    <div className='btn'><button className='btn'>Order</button></div>
                </NavLink>
                </div>
            </div>
        </div>
    )
}
export default MainVideoPage;