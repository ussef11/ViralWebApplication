import { Link } from "react-router-dom";
import './navbar.css'
 import useWindowDimensions from "../Hook/useWindowDimensions";
import { useEffect, useRef , useState } from "react";
import menusvg from '../svg/Menu.svg'
import close from '../svg/close.svg'
import login from '../svg/login.svg'
import logout from '../svg/logout.svg'
import Tawfik from "../svg/tawfik.png"


const Navbar = () => {

    const {height , width} = useWindowDimensions();
    const [showopt , setShowopt] = useState(true);
    const [optmobile , setoptmobile] = useState(false);
    const [searchinput , setsearchinput] = useState("Srearch");

   


    useEffect(()=>{
        if(width <= 600){
            setShowopt(false)
        }else{
            setShowopt(true)
        }    
       
    })
   
    const handleclick = ()=>{
        setoptmobile(true)      
    }

    const closeclick = ()=>{
        if(optmobile)
        {
            setoptmobile(false)   
        }    
    }








    
    return ( 
        <div className="nav"> 
        <nav className="navbar">
        <div style={{height:'69px'}} className="content">
            <div className="title">
                 <Link className="bi"  style={{textDecoration:'none' , color:'wheat'}} to="/">  BI </Link>
            </div>
          {showopt ? <div  className="navopt">
             <Link  className="a" to="/home">Home</Link>
            
               <Link className="a" to="/Terms-of-Service">Terms of Service</Link> 
               <Link className="a" to="/Disclaimer">Disclaimer</Link> 
              <Link className="a" to="/privacy-policy">privacy policy</Link> 
                       <Link className="a" to="/contact-us">Contact Us</Link>
               <Link className="a" to="/About-Us">About Us</Link> 
            </div> : <button className="close"  onClick={()=>{ {optmobile ? closeclick() :handleclick() } }}>  { optmobile ? <img className="icon" src={close} alt="" /> : <img className="icon" src={menusvg} alt="" />} </button> }  
        </div>
    </nav>
    {optmobile && <div className="optmobile">
            <ul>
                
                <li> <Link className="a" to="/home">Home</Link></li>
                   <li>                <Link className="a" to="/Terms-of-Service">Terms of Service</Link> 
</li>   
<Link className="a" to="/Disclaimer">Disclaimer</Link> 
                   <li>    <Link className="a" to="/privacy-policy">privacy policy</Link> </li>
                  
               
                
            </ul>
            
   
         </div> 
         
         } 
    </div>
     );
}
 
export default Navbar;