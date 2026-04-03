import React from "react";
import { Link } from "react-router-dom";

function Navbar({logout}){

const cart = JSON.parse(localStorage.getItem("cart")) || [];

return(

<nav style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
background:"#ff4d4d",
padding:"15px",
color:"white"
}}>

<h2>🍔 Food Delivery</h2>

<div style={{display:"flex",gap:"20px"}}>

<Link to="/" style={{color:"white"}}>Home</Link>

<Link to="/menu" style={{color:"white"}}>Menu</Link>

<Link to="/cart" style={{color:"white"}}>
Cart ({cart.length})
</Link>

<Link to="/profile" style={{color:"white"}}>Profile</Link>

<button onClick={logout}>
Logout
</button>

</div>

</nav>

)

}

export default Navbar;