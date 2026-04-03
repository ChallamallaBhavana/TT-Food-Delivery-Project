import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment(){

const navigate = useNavigate();

const [showConfirm,setShowConfirm] = useState(false);
const [loading,setLoading] = useState(false);

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const total = cart.reduce((sum,item)=> sum + item.price ,0);


// Payment Handler

const handlePayment = (method)=>{

let url = "";

if(method === "phonepe"){
url = "https://www.phonepe.com/";
}

if(method === "paytm"){
url = "https://paytm.com/";
}

if(method === "gpay"){
url = "https://pay.google.com/";
}

window.open(url,"_blank");

setShowConfirm(true);

};


// Confirm Payment

const confirmPayment = ()=>{

setLoading(true);

setTimeout(()=>{

setLoading(false);

alert("Payment Successful 🎉");

navigate("/tracking");

},2000)

}


// Cancel Payment

const cancelPayment = ()=>{

alert("Payment Cancelled");

setShowConfirm(false);

}


// COD

const handleCOD = ()=>{

alert("Order Placed Successfully 🚚");

navigate("/tracking");

}


return(

<div style={{padding:"30px"}}>

<h2>💳 Choose Payment Method</h2>

<h3>Total Amount : ₹{total}</h3>


{/* PhonePe */}

<div 
style={{
display:"flex",
alignItems:"center",
gap:"15px",
marginTop:"20px",
cursor:"pointer"
}}
onClick={()=>handlePayment("phonepe")}
>

<img 
src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png"
width="60"
alt="PhonePe"
/>

<h3>PhonePe</h3>

</div>


{/* Paytm */}

<div 
style={{
display:"flex",
alignItems:"center",
gap:"15px",
marginTop:"20px",
cursor:"pointer"
}}
onClick={()=>handlePayment("paytm")}
>

<img 
src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png"
width="60"
alt="Paytm"
/>

<h3>Paytm</h3>

</div>


{/* GPay */}

<div 
style={{
display:"flex",
alignItems:"center",
gap:"15px",
marginTop:"20px",
cursor:"pointer"
}}
onClick={()=>handlePayment("gpay")}
>

<img 
src="https://download.logo.wine/logo/Google_Pay/Google_Pay-Logo.wine.png"
width="60"
alt="Google Pay"
/>

<h3>Google Pay</h3>

</div>


{/* COD */}

<button
style={{
marginTop:"30px",
padding:"10px 20px",
background:"orange",
border:"none",
borderRadius:"5px",
cursor:"pointer"
}}

onClick={handleCOD}

>

Cash on Delivery 🚚

</button>


{/* Confirm Payment Modal */}

{showConfirm && (

<div style={{

position:"fixed",
top:"0",
left:"0",
width:"100%",
height:"100%",
background:"rgba(0,0,0,0.5)",
display:"flex",
justifyContent:"center",
alignItems:"center"

}}>

<div style={{

background:"white",
padding:"30px",
borderRadius:"10px",
textAlign:"center"

}}>

<h3>Have you completed payment?</h3>

{loading ? (

<h2>Processing Payment... ⏳</h2>

):( 

<div>

<button

onClick={confirmPayment}

style={{

background:"green",
color:"white",
padding:"10px",
margin:"10px",
border:"none",
borderRadius:"5px"

}}

>

Yes Paid ✅

</button>


<button

onClick={cancelPayment}

style={{

background:"red",
color:"white",
padding:"10px",
margin:"10px",
border:"none",
borderRadius:"5px"

}}

>

Cancel ❌

</button>

</div>

)}

</div>

</div>

)}

</div>

)

}

export default Payment;