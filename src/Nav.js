

import './App.css';
import Personal from "./Personal.js";



function Nav(){

return (<div className="n"><div className="na">
<div className="nav">
    <div className="activee" to="">Personal Info</div>
    <div className="inav" to="../Work Experience" >Work Experience</div>
    <div className="inav" to="../Education">Education</div>
    <div className="inav"to="../Key Skills">Key Skills</div>
    
</div>

<div className="van">
<Personal/></div>
</div>
</div>)

}
export default Nav;