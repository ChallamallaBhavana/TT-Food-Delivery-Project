import React, { useState } from "react";

function Favorites(){

const [favorites,setFavorites] = useState(
JSON.parse(localStorage.getItem("favorites")) || []
);

const removeFavorite = (index) => {

const updated = favorites.filter((_,i)=> i !== index);

setFavorites(updated);

localStorage.setItem("favorites",JSON.stringify(updated));

}

return(

<div style={{padding:"30px"}}>

<h2>❤️ Favorite Items</h2>

{favorites.length === 0 ? (

<p>No favorites added</p>

) : (

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",
gap:"20px"
}}>

{favorites.map((item,index)=>(

<div
key={index}
style={{
border:"1px solid #ddd",
padding:"15px",
borderRadius:"10px",
textAlign:"center",
boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
}}
>

<img 
src={item.image}
alt={item.name}
width="120"
style={{borderRadius:"10px"}}
/>

<h4>{item.name}</h4>

<p>₹{item.price}</p>

<button
onClick={()=>removeFavorite(index)}
style={{
background:"red",
color:"white",
border:"none",
padding:"8px 15px",
borderRadius:"5px",
cursor:"pointer"
}}
>
Remove ❌
</button>

</div>

))}

</div>

)}

</div>

)

}

export default Favorites;