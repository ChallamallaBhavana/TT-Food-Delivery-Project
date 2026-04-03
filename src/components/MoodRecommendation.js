import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function MoodRecommendation(){

const navigate = useNavigate();

const [mood,setMood] = useState("");
const [foods,setFoods] = useState([]);

const moodFoods = {

Happy:[
"Veg Pizza",
"Ice Cream",
"Mc Chicken Burger",
"Chocolate Cake"
],

Sad:[
"Chocolate Cake",
"Chicken Biryani",
"Ice Cream",
"Paneer Roll"
],

/* 🤒 Sick — NEW HEALTH FEATURE */

Sick:[
"Apple",
"Banana",
"Orange",
"Pomegranate",
"Paracetamol",
"Vitamin C Tablets",
"ORS",
"Idli",
"Dosa"
],

Hungry:[
"Mc Chicken Burger",
"Chicken Roll",
"Veg Pizza",
"Chicken Biryani"
],

Party:[
"KFC Chicken Bucket",
"Veg Pizza",
"Chicken Roll",
"Chocolate Cake"
]

};

const handleMood = (selectedMood)=>{
setMood(selectedMood);
setFoods(moodFoods[selectedMood]);
};

const goToFood = (food)=>{
navigate(`/menu?search=${food}`);
};

return(

<div className="feature-box">

<h2>🧠 Mood Based Food Recommendation</h2>

<div className="mood-buttons">

<button onClick={()=>handleMood("Happy")}>😄 Happy</button>
<button onClick={()=>handleMood("Sad")}>😔 Sad</button>
<button onClick={()=>handleMood("Sick")}>🤒 Sick</button>
<button onClick={()=>handleMood("Hungry")}>🔥 Hungry</button>
<button onClick={()=>handleMood("Party")}>🥳 Party</button>

</div>

{mood && (

<div className="recommend-box">

<h3>Recommended for {mood}</h3>

{foods.map((food,index)=>(

<p 
key={index}
className="click-food"
onClick={()=>goToFood(food)}
>
🍴 {food}
</p>

))}

</div>

)}

</div>

)

}

export default MoodRecommendation;