import './pizzaLoader.css';
import MoonLoader from "react-spinners/ClipLoader";
import React, {useState, useEffect} from 'react';


 export const PizzaLoader = () => {
     const [loading, setLoading] = useState(true);

     useEffect(() => {
         setLoading(true);
         setTimeout(() => {
             setLoading(false);
         }, 3000)
     }, [])
    return(
        <div className="loader"> 
        {
            loading ?

            <MoonLoader color={"#4aa63d"} loading={loading} size={200} />

            :
        
        <div className='action'></div>
 }
        </div>
 

    
    )
}
