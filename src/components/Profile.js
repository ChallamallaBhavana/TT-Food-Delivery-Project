import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Profile() {

const navigate = useNavigate();

const sections = [

{
title: "Profile",
icon: "👤",
path: "/profile-details"
},

{
title: "Saved Address",
icon: "📍",
path: "/address"
},

{
title: "Payment Methods",
icon: "💳",
path: "/payment"
},

{
title: "Rewards",
icon: "🎁",
path: "/rewards"
},

{
title: "Favorites",
icon: "❤️",
path: "/favorites"
},

// ✅ New Order History Section
{
title: "Order History",
icon: "📦",
path: "/orders"
},

{
title: "Help",
icon: "🆘",
path: "/help"
}

];

return (

<div className="profile-container">

<h2>My Profile</h2>

<div className="profile-grid">

{sections.map((item,index)=>(

<div 
key={index}
className="profile-card"
onClick={()=>navigate(item.path)}
>

<div className="profile-icon">
{item.icon}
</div>

<h3>{item.title}</h3>

</div>

))}

</div>

</div>

);

}

export default Profile;