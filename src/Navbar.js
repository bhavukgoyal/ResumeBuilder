import { NavLink } from "react-router-dom";
import './App.css';
import WebStoriesIcon from '@mui/icons-material/WebStories';


function Navbar() {
 
  return ( 
    <div>
     <div className="nab">
      <WebStoriesIcon fontSize="large" className="icon"/>
     <NavLink to="./ResumeBuilder"className="link"  >Resume Templates</NavLink>
      
      <NavLink to="./About Us"className="link"  >About Us</NavLink>
     
      </div>
     

    </div>
  );
}




export default Navbar