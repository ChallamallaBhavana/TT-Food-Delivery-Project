import React, { useState, useEffect } from "react";

function OrderHistory(){

const [orders,setOrders] = useState([]);

useEffect(()=>{

const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
setOrders(savedOrders);

},[]);


// Cancel Order

const cancelOrder = (index) => {

const updatedOrders = [...orders];
updatedOrders.splice(index,1);

setOrders(updatedOrders);
localStorage.setItem("orders",JSON.stringify(updatedOrders));

alert("Order Cancelled");

};


// Reorder

const reorder = (order) => {

localStorage.setItem("cart",JSON.stringify(order));
alert("Items added to cart");

};


// Rating

const rateOrder = (index,rating)=>{

const updatedOrders = [...orders];

updatedOrders[index].rating = rating;

setOrders(updatedOrders);

localStorage.setItem("orders",JSON.stringify(updatedOrders));

};


return(

<div style={{padding:"30px"}}>

<h2>📦 Order History</h2>

{orders.length === 0 ? (

<p>No Orders Yet</p>

):( 

orders.map((order,index)=>(

<div key={index}

style={{

border:"1px solid #ddd",
borderRadius:"10px",
padding:"20px",
margin:"20px 0",
boxShadow:"0 2px 10px rgba(0,0,0,0.1)",
animation:"fadeIn 0.5s ease"

}}

>

<h3>Order #{index+1}</h3>

<p style={{color:"green"}}>✔ Delivered</p>

{order.map((item,i)=>(

<div key={i}

style={{
display:"flex",
alignItems:"center",
gap:"20px",
margin:"10px 0"
}}

>

<img src={item.image} width="80" alt={item.name}/>

<div>

<h4>{item.name}</h4>

<p>₹{item.price}</p>

</div>

</div>

))}

{/* Buttons */}

<div style={{marginTop:"15px"}}>

<button

onClick={()=>reorder(order)}

style={{
background:"green",
color:"white",
padding:"8px 15px",
marginRight:"10px",
border:"none",
borderRadius:"5px"
}}

>

🔁 Reorder

</button>

<button

onClick={()=>cancelOrder(index)}

style={{
background:"red",
color:"white",
padding:"8px 15px",
border:"none",
borderRadius:"5px"
}}

>

❌ Cancel

</button>

</div>


{/* Rating */}

<div style={{marginTop:"15px"}}>

<p>Rate Order:</p>

{[1,2,3,4,5].map((star)=>(

<span

key={star}

onClick={()=>rateOrder(index,star)}

style={{
cursor:"pointer",
fontSize:"25px",
color: order.rating >= star ? "gold" : "gray"
}}

>

⭐

</span>

))}

</div>

</div>

))

)}

<style>

{`

@keyframes fadeIn {

from{

opacity:0;
transform:translateY(20px);

}

to{

opacity:1;
transform:translateY(0);

}

}

`}

</style>

</div>

)

}

export default OrderHistory;