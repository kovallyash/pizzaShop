import "./AppHeader.css";
import {NavLink} from 'react-router-dom';


const AppHeader = () =>{
return(
<nav className='app_header'>
      <div className='buttons'>
        
          <button  className="butn">
            
          
            Contacts
            
            </button>
          <button className="butn" href='/about' >About Us</button>
          <button  className="butn" href='/order'>Order</button>
          </div>
        <div className='company_name'>
          <h1>Antony's Pizza</h1>
          </div>
          
        
      

      
</nav>
)}
export default AppHeader