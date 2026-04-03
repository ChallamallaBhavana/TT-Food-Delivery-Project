import React,{useState,useEffect} from "react";
import "../styles/style.css";
import { useLocation } from "react-router-dom";
import VoiceSearch from "./VoiceSearch";

import burger from "../images/Burger.jpg";
import pizza from "../images/pizza.jpg";
import biryani from "../images/biryani.jpg";
import sandwich from "../images/sandwich.jpg";
import pasta from "../images/pasta.avif";
import friedrice from "../images/friedrice.webp";
import noodles from "../images/noodles.jpg";
import paneer from "../images/paneer butter masala.jpg";
import chicken from "../images/chicken curry.jpg";
import icecream from "../images/ice cream.jpg";
import fries from "../images/French Fries.jpg";
import cake from "../images/Chocolate Cake.webp";
import apple from "../images/apple.jpg";
import banana from "../images/banana.jpg";
import orange from "../images/orange.jpg";
import grapes from "../images/grapes.jpg";
import watermelon from "../images/watermelon.jpg";
import muskmelon from "../images/muskmelon.jpg";
import sapota from "../images/sapota.jpg";
import coconut from "../images/coconut.jpg";
import pineapple from "../images/pineapple.jpg";
import dates from "../images/dates.jpg";
import coneicecream from "../images/cone ice cream.jpg";
import samosa from "../images/samosa.jpg";
import kfcchicken from "../images/kfc chicken.jpg";
import kfcwings from "../images/kfc wings.jpg";
import gongurabiryani from "../images/gongura biryani.jpg";
import paneerbiryani from "../images/paneer biryani.jpg";
import keemabiryani from "../images/keema biryani.jpg";
import chickenlollipops from "../images/chicken lollipop.jpg";
import vada from "../images/vada.jpg";
import idli from "../images/idly.jpg";
import poori from "../images/poori.jpg";
import bonda from "../images/bonda.jpg";
import uthappam from "../images/uthappam.jpg";
import cokee from "../images/cokee.jpg";
import chocochipmuffin from "../images/chocochip muffin.jpg";
import regularmeal from "../images/regular meal.jpg";
import popcornchickenricebowl from "../images/popcorn chicken rice bowl.jpg";
import coke from "../images/coke.jpg";
import margherita from "../images/margherita pizza.jpg";
import chickenpizza from "../images/chicken pizza.jpg";
import paneerpizza from "../images/paneer pizza.jpg";
import khichidi from "../images/khichidi.jpg";
import pulihora from "../images/pulihora.jpg";
import upma from  "../images/upma.jpg";
import vegmanchuriannoodles from "../images/veg manchurian noodles.jpg";
import eggmanchuriannoodles from "../images/egg manchurian noodles.jpg";
import eggnoodles from "../images/egg noodles.jpg";
import paracetamol from "../images/paracetamol.jpg";
import cornsamosa from "../images/corn samosa.jpg";
import paneersamosa from "../images/paneer samosa.jpg";
import chickensamosa from "../images/chicken samosa.jpg";
import dolo from "../images/dolo.jpg";
import vitaminc from "../images/vitaminc.jpg";
import coldtablet from "../images/coldtablet.jpg";
import bodypain from "../images/bodypain.jpg";
import ors from "../images/ors.jpg";
import butterchickennaan from "../images/butter chicken naan.jpg";
import springrolls from "../images/spring rolls.jpg";
import gobitikka from "../images/gobi tikka.jpg";
import vanillaicecream from "../images/vanillaicecream.jpg";
import strawberryicecream from "../images/straberryicecream.jpg";
import chocolateicecream from "../images/chocolateicecream.jpg";

import gulabjamun from "../images/gulab jamun.jpg";
import cookies from "../images/cookies.jpg";




function Menu({addToCart}){

const location = useLocation();

/* Favorites Fix */
const [favorites,setFavorites] = useState(
JSON.parse(localStorage.getItem("favorites")) || []
);

const toggleFavorite = (food)=>{

let updatedFavorites;

if(favorites.some(f => f.name === food.name)){
updatedFavorites = favorites.filter(f => f.name !== food.name);
}else{
updatedFavorites = [...favorites,food];
}

setFavorites(updatedFavorites);
localStorage.setItem("favorites",JSON.stringify(updatedFavorites));

};

/* Foods Array (ALL YOUR ITEMS KEPT) */

const foods=[

/* starters */
{ name:"chicken lollipops", price:150, rating:4.5, category:"Starters", image:chickenlollipops},
{ name:"butter chicken naan", price:80, rating:4.6, category:"Starters", image:butterchickennaan},
{ name:"spring rolls", price:60, rating:4.3, category:"Starters", image:springrolls},
{ name:"gobi tikka", price:120, rating:4.4, category:"Starters", image:gobitikka},
/* McDonalds */
{ name:"Mc Chicken Burger", price:150, rating:4.6, category:"McDonalds", image:burger },
{ name:"Mc Veg Burger", price:130, rating:4.5, category:"McDonalds", image:burger },
{ name : "Coke", price:60, rating:4.4, category:"McDonalds", image:coke},
{ name:"pizza", price:250, rating:4.7, category:"McDonalds", image:pizza},
{ name:"fries", price:100, rating:4.5, category:"McDonalds", image:fries},
{ name:"cokee", price:109, rating:4.4, category:"McDonalds", image:cokee},
{ name: "Regular Meal", price:199, rating:4.5, category:"McDonalds", image:regularmeal},
{ name:"Choco Chip Muffin", price:120, rating:4.4, category:"McDonalds", image:chocochipmuffin },

/* KFC */
{ name:"KFC Chicken Bucket", price:350, rating:4.7, category:"KFC", image:kfcchicken },
{ name:"KFC Wings", price:220, rating:4.6, category:"KFC", image:kfcwings },
{ name:"coke",price:60, rating:4.4, category:"KFC", image:coke},
{ name:"fries", price:100, rating:4.5, category:"KFC", image:fries},
{ name:"popcorn chicken rice bowl", price:150, rating:4.4, category:"KFC", image:popcornchickenricebowl},

/* Biryani */
{ name:"Chicken Biryani", price:200, rating:4.6, category:"Biryani", image:biryani },
{ name:"Mutton Biryani", price:260, rating:4.7, category:"Biryani", image:biryani },
{ name:"Gongura Biryani", price:220, rating:4.5, category:"Biryani", image:gongurabiryani},
{ name:"Paneer Biryani", price:240, rating:4.6, category:"Biryani", image:paneerbiryani },
{ name:"Keema Biryani", price:260, rating:4.7, category:"Biryani", image:keemabiryani },

/* Pizza */
{ name:"Veg Pizza", price:250, rating:4.7, category:"Pizza", image:pizza },
{ name:"Cheese Pizza", price:270, rating:4.6, category:"Pizza", image:pizza },
{ name:"Margherita Pizza", price:129, rating:4.5, category:"Pizza", image:margherita },
{ name:"Chicken Pizza", price:210, rating:4.6, category:"Pizza", image:chickenpizza },
{ name:"Paneer Pizza", price:199, rating:4.5, category:"Pizza", image:paneerpizza },

/* Tiffins */
{ name:"Idli", price:60, rating:4.3, category:"Tiffins", image:idli },
{ name:"Poori", price:90, rating:4.4, category:"Tiffins", image:poori },
{ name:"Vada", price:50, rating:4.2, category:"Tiffins", image:vada },
{ name:"Bonda", price:40, rating:4.1, category:"Tiffins", image:bonda },
{ name:"Uthappam", price:70, rating:4.3, category:"Tiffins", image:uthappam },
{ name:"Khichidi", price:80, rating:4.4, category:"Tiffins", image:khichidi },
{ name:"Pulihora", price:75, rating:4.3, category:"Tiffins", image:pulihora },
{ name:"Upma", price:60, rating:4.2, category:"Tiffins", image:upma },

/* Noodles */
{ name:"Veg Noodles", price:140, rating:4.3, category:"Noodles", image:noodles },
{ name:"Chicken Noodles", price:160, rating:4.4, category:"Noodles", image:noodles },
{ name: "Veg Manchurian Noodles", price:150, rating:4.3, category:"Noodles", image:vegmanchuriannoodles },
{ name: "Egg Noodles", price:140, rating:4.2, category:"Noodles", image:eggnoodles },
{ name: "Egg Manchurian Noodles", price:160, rating:4.4, category:"Noodles", image:eggmanchuriannoodles },

/* Samosa */
{ name:"Veg Samosa", price:30, rating:4.2, category:"Samosa", image:samosa },
{ name:"Paneer Samosa", price:40, rating:4.3, category:"Samosa", image:paneersamosa },
{ name:"Chicken Samosa", price:40, rating:4.3, category:"Samosa", image:chickensamosa },
{ name:"Corn Samosa", price:35, rating:4.2, category:"Samosa", image:cornsamosa },
  
/* Ice Cream */
{ name:"vanilla Ice Cream", price:50, rating:4.5, category:"Ice Cream", image:vanillaicecream },
{ name:"strawberry Ice Cream", price:60, rating:4.6, category:"Ice Cream", image:strawberryicecream },
{ name:"chocolate Ice Cream", price:60, rating:4.5, category:"Ice Cream", image:chocolateicecream },
 
/*Desserts*/

{ name:"gulab jamun", price:80, rating:4.4, category:"Desserts", image:gulabjamun },
{ name:"cookies", price:60, rating:4.3, category:"Desserts", image:cookies },

/* Fruits */
{ name:"apple", price:80, rating:4.5, category:"Fruits", image:apple },
{ name:"Banana", price:40, rating:4.4, category:"Fruits", image:banana},
{ name:"Orange", price:60, rating:4.3, category:"Fruits", image:orange },
{ name:"Grapes", price:120, rating:4.6, category:"Fruits", image:grapes},
{ name:"Watermelon", price:50, rating:4.4, category:"Fruits", image:watermelon },
{ name:"Muskmelon", price:40, rating:4.3, category:"Fruits", image:muskmelon },
{ name:"Sapota", price:30, rating:4.2, category:"Fruits", image:sapota },
{ name:"Coconut", price:20, rating:4.1, category:"Fruits", image:coconut },
{ name:"Pineapple", price:60, rating:4.4, category:"Fruits", image:pineapple },
{ name:"Dates", price:100, rating:4.5, category:"Fruits", image:dates },

/* Medicines */
{ name:"Paracetamol", price:30, rating:4.5, category:"Medicines", image:paracetamol },
{ name:"Vitamin C Tablets", price:50, rating:4.4, category:"Medicines", image:vitaminc },
{ name:"Cough Syrup", price:90, rating:4.3, category:"Medicines", image:coldtablet },
{ name:"ORS", price:25, rating:4.6, category:"Medicines", image:ors },
{ name:"Body Pain Relief", price:40, rating:4.5, category:"Medicines", image:bodypain },


];

const [search,setSearch] = useState("");
const [category,setCategory] = useState("All");

const filteredFoods = foods.filter(food =>
food.name.toLowerCase().includes(search.toLowerCase()) &&
(category === "All" || food.category === category)
);

return(

<div className="menu-container">

<h2 className="title">🍽 Popular Foods</h2>

<input
className="search"
value={search}
placeholder="Search your favourite food..."
onChange={(e)=>setSearch(e.target.value)}
/>

<VoiceSearch setSearch={setSearch}/>

<div className="categories">

<button onClick={()=>setCategory("All")}>All</button>
<button onClick={()=>setCategory("Starters")}>Starters</button>
<button onClick={()=>setCategory("McDonalds")}>McDonalds</button>
<button onClick={()=>setCategory("KFC")}>KFC</button>
<button onClick={()=>setCategory("Biryani")}>Biryani</button>
<button onClick={()=>setCategory("Pizza")}>Pizza</button>
<button onClick={()=>setCategory("Tiffins")}>Tiffins</button>
<button onClick={()=>setCategory("Noodles")}>Noodles</button>
<button onClick={()=>setCategory("Samosa")}>Samosa</button>
<button onClick={()=>setCategory("Ice Cream")}>🍦 Ice Cream</button>
<button onClick={()=>setCategory("Desserts")}>🍰 Desserts</button>
<button onClick={()=>setCategory("Fruits")}>🍎 Fruits</button>
<button onClick={()=>setCategory("Medicines")}>💊 Medicines</button>

</div>

<div className="food-grid">

{filteredFoods.map((food,index)=>(

<div className="food-card" key={index}>

<img src={food.image} alt={food.name}/>

<span
className="favorite"
onClick={()=>toggleFavorite(food)}
>
{favorites.some(f => f.name === food.name) ? "❤️" : "🤍"}
</span>

<h3>{food.name}</h3>

<p className="rating">⭐ {food.rating}</p>

<p className="price">₹{food.price}</p>

<button onClick={()=>addToCart(food)}>
Add To Cart 🛒
</button>

</div>

))}

</div>

</div>

)

}

export default Menu;