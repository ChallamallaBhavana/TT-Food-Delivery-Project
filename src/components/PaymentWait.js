import React from "react";
import { useNavigate } from "react-router-dom";

function PaymentWait(){

const navigate = useNavigate();

return(

<div style={{textAlign:"center",padding:"50px"}}>

<h2>Complete Payment</h2>

<p>Please complete payment in opened tab</p>

<button
onClick={()=>navigate("/payment-success")}
style={{
padding:"12px 20px",
background:"green",
color:"white",
border:"none",
borderRadius:"8px"
}}
>
I Paid Successfully
</button>

</div>

)

}

export default PaymentWait;