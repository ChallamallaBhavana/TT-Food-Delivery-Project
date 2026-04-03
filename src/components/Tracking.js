import React, { useState, useEffect } from "react";

function Tracking(){

const [status,setStatus] = useState(0);

const steps = [
"Order Placed",
"Preparing Food",
"Out for Delivery",
"Delivered"
];

// Auto update every 5 minutes

useEffect(()=>{

const interval = setInterval(()=>{

setStatus(prev => {

if(prev < 3){
return prev + 1;
}else{
clearInterval(interval);
return prev;
}

})

},300000); // 5 minutes

return ()=> clearInterval(interval);

},[])


// Move order to history when delivered

useEffect(()=>{

if(status === 3){

const cart = JSON.parse(localStorage.getItem("cart")) || [];
const orders = JSON.parse(localStorage.getItem("orders")) || [];

if(cart.length > 0){
orders.push(cart);
localStorage.setItem("orders",JSON.stringify(orders));
localStorage.removeItem("cart");
}

}

},[status]);

return(

<div style={{padding:"30px",textAlign:"center"}}>

<h2>🚚 Live Delivery Tracking</h2>

{/* Order Info */}

<div style={{
background:"#f5f5f5",
padding:"20px",
borderRadius:"10px",
marginBottom:"30px"
}}>

<h4>Order ID : #FD12345</h4>
<p>Restaurant : Food Delivery Kitchen</p>
<p>Coupon Applied : SAVE20</p>

</div>

{/* Progress Bar */}

<div style={{
width:"80%",
margin:"30px auto",
background:"#eee",
height:"12px",
borderRadius:"10px"
}}>

<div
style={{
width:`${(status+1)*25}%`,
height:"100%",
background:"green",
borderRadius:"10px",
transition:"2s"
}}
>

</div>

</div>

{/* Status */}

{steps.map((step,index)=>(

<p
key={index}
style={{
fontSize:"18px",
color:index <= status ? "green" : "gray",
fontWeight:index <= status ? "bold" : "normal"
}}
>

{index <= status ? "✔ " : "⏳ "} {step}

</p>

))}

{/* Delivery Animation */}

<div style={{marginTop:"40px"}}>

{status === 2 && (

<div>

<h3>🚴 Delivery Partner On The Way</h3>

<div style={{
fontSize:"40px",
animation:"move 5s linear infinite"
}}>
🚴‍♂️ ------------------------- 🏠
</div>

</div>

)}

{status === 3 && (
<h2>🎉 Delivered Successfully</h2>
)}

</div>

{/* Google Map */}

<div style={{marginTop:"40px"}}>

<h3>📍 Live Location</h3>

<iframe
title="map"
width="80%"
height="300"
style={{border:"0",borderRadius:"10px"}}
loading="lazy"
allowFullScreen
src="https://www.google.com/maps?q=Hyderabad&output=embed"
>

</iframe>

</div>

{/* ETA */}

<div style={{marginTop:"30px"}}>

<h3>⏱ Estimated Delivery : 20 - 30 mins</h3>

</div>

{/* Notification */}

<div style={{
marginTop:"30px",
background:"#fff3cd",
padding:"15px",
borderRadius:"10px"
}}>

🔔 You will receive notification when order arrives

</div>

<style>

{`

@keyframes move {

0% { transform: translateX(-200px); }

100% { transform: translateX(200px); }

}

`}

</style>

</div>

)

}

export default Tracking;