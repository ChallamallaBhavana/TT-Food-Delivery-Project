import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSuccess(){

const navigate = useNavigate();

return(

<div style={{textAlign:"center",padding:"50px"}}>

<h1>🎉 Order Placed Successfully</h1>

<h2>🍔 Preparing your food...</h2>

<button
onClick={()=>navigate("/tracking")}
style={{
marginTop:"20px",
padding:"10px 20px",
background:"green",
color:"white",
border:"none",
borderRadius:"5px"
}}
>
Track Order 🚚
</button>

</div>

)

}

export default OrderSuccess;