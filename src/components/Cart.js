import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart }) {

const navigate = useNavigate();

const [items,setItems] = useState(cart);

const removeItem = (index)=>{

const updated = items.filter((_,i)=> i !== index);

setItems(updated);

localStorage.setItem("cart",JSON.stringify(updated));

}

const total = items.reduce((sum,item)=> sum + item.price , 0);

return(

<div style={{padding:"20px"}}>

<h2>🛒 Your Cart</h2>

{items.length === 0 ? (

<h3>Your cart is empty</h3>

) : (

<div>

{items.map((item,index)=>(
    
<div 
key={index}
style={{
display:"flex",
alignItems:"center",
gap:"20px",
marginBottom:"20px",
border:"1px solid #ddd",
padding:"10px",
borderRadius:"10px"
}}
>

<img 
src={item.image}
alt={item.name}
width="80"
/>

<div>

<h4>{item.name}</h4>
<p>₹{item.price}</p>

<button
onClick={()=>removeItem(index)}
style={{
background:"red",
color:"white",
border:"none",
padding:"5px 10px",
borderRadius:"5px",
cursor:"pointer"
}}
>
Remove
</button>

</div>

</div>

))}

<hr/>

<h3>Total: ₹{total}</h3>

<button
onClick={()=>navigate("/payment")}
style={{
padding:"10px 20px",
background:"green",
color:"white",
border:"none",
borderRadius:"5px"
}}
>
Proceed to Payment 💳
</button>

</div>

)}

</div>

)

}

export default Cart;