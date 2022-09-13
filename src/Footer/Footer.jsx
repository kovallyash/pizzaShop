import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./AppFooter.css";

const AppFooter = () =>{
    return(
     
       <div className='footer'>
         <div className='container'>
           <div className='row'>
             <div className='footer-col'>
             <h4 href='aboutUs'>Company</h4>
             <ul>
               <li>
                 <a>About us</a>
                 </li>
               <li><a>Our services</a></li>
               <li><a>Privacy policy</a></li>
             </ul>
           </div>
           <div className='footer-col'>
             
            
           <h4>Get Help</h4>
          
             <ul>
               <li><a>FAQ</a></li>
               <li><a>Order status</a></li>
               <li><a>Payment options</a></li>
             </ul>
           </div>
           <div className='footer-col'>
           <h4 >Contact us</h4>
             <ul>
               <li><a>pizzapaprica@gmail.com</a></li>
               <li><a>+1-234-56-78</a></li>
               <li><a>+1-234-56-78</a></li>
             </ul>
           </div>
           </div>
         </div>
       </div>
       
    )
}
export default AppFooter