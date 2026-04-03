import React from "react";
import "../styles/style.css";

import MoodRecommendation from "./MoodRecommendation";
import HungerLevel from "./HungerLevel";
import GroupOrder from "./GroupOrder";
import FoodChatBot from "./FoodChatBot";

function Home(){

return(

<div className="home">

<div className="hero">

<h1>🍔 Delicious Food Delivered To You</h1>

<p>Order from your favourite restaurants</p>

<a href="/menu">
<button className="order-btn">Order Now</button>
</a>

</div>

<h2>Popular Categories</h2>

<div className="home-categories">

<div className="category-card">🍔 Burgers</div>
<div className="category-card">🍕 Pizza</div>
<div className="category-card">🍛 Biryani</div>
<div className="category-card">🍰 Desserts</div>
<div className="category-card">🍗 KFC</div>
<div className="category-card">🍟 McDonalds</div>
<div className="category-card">🍜 Noodles</div>
<div className="category-card">🌯 Rolls</div>

</div>

<MoodRecommendation/>

<HungerLevel/>

<GroupOrder/>

<FoodChatBot/>

</div>

)

}

export default Home;