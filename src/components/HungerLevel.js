import React,{useState} from "react";
import "../styles/style.css";

function HungerLevel(){

const [level,setLevel] = useState(1);
const [foods,setFoods] = useState([]);

const handleChange = (value)=>{

setLevel(value);

if(value==1){
setFoods(["Samosa","Fries","Ice Cream"]);
}
else if(value==2){
setFoods(["Burger","Pizza","Rolls"]);
}
else{
setFoods(["Biryani","KFC Bucket","Meals"]);
}

};

return(

<div className="feature-box">

<h2>🔥 Hunger Level</h2>

<input
type="range"
min="1"
max="3"
value={level}
onChange={(e)=>handleChange(e.target.value)}
/>

<p>
{level==1 && "Low Hunger"}
{level==2 && "Medium Hunger"}
{level==3 && "Very Hungry"}
</p>

<div>

{foods.map((food,index)=>(
<p key={index}>🍴 {food}</p>
))}

</div>

</div>

)

}

export default HungerLevel;