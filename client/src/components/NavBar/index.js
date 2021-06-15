import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    
    <nav className="navbar navbar-dark">
            <h1 style={{ color: "white" }}>Stasis</h1>

            <Link to="/" className="navbar-brand">
              Dashboard
            </Link>
    </nav>
    
      
     
      
   
  );
}
export default NavBar;
