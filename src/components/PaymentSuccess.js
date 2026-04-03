import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentSuccess(){

const navigate = useNavigate();

return(

<div style={{textAlign:"center",padding:"50px"}}>

<h1>✅ Payment Successful</h1>

<h2>🎉 Order Confirmed</h2>

<button
onClick={()=>navigate("/tracking")}
style={{
padding:"10px 20px",
background:"green",
color:"white",
border:"none",
borderRadius:"5px"
}}
>
Track Delivery 🚚
</button>

</div>

)

}

export default PaymentSuccess;