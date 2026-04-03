import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import Favorites from "./components/Favorites";
import PaymentSuccess from "./components/PaymentSuccess";
import OrderSuccess from "./components/OrderSuccess";
import Address from "./components/Address";
import Payment from "./components/Payment";
import Rewards from "./components/Rewards";
import Help from "./components/Help";
import PaymentWait from "./components/PaymentWait";
import Tracking from "./components/Tracking";
import OrderHistory from "./components/OrderHistory";
function App() {

/* Login State */

const [isLoggedIn,setIsLoggedIn] = useState(
localStorage.getItem("isLoggedIn") === "true"
);

/* Cart State */

const [cart,setCart] = useState(
JSON.parse(localStorage.getItem("cart")) || []
);

/* Login */

const login = ()=>{
localStorage.setItem("isLoggedIn","true");
setIsLoggedIn(true);
}

/* Logout */

const logout = ()=>{
localStorage.removeItem("isLoggedIn");
setIsLoggedIn(false);
}

/* Add To Cart */

const addToCart = (item)=>{

const updatedCart = [...cart,item];

setCart(updatedCart);
localStorage.setItem("cart",JSON.stringify(updatedCart));

}

return (

<Router>

{isLoggedIn && <Navbar logout={logout}/>}

<Routes>

{/* Default Route */}

<Route
path="/"
element={isLoggedIn ? <Home/> : <Navigate to="/login"/>}
/>

{/* Register */}

<Route path="/register" element={<Register/>} />

{/* Login */}

<Route path="/login" element={<Login login={login}/>} />

{/* Protected Routes */}

<Route
path="/menu"
element={isLoggedIn ? <Menu addToCart={addToCart}/> : <Navigate to="/login"/>}
/>

<Route
path="/cart"
element={isLoggedIn ? <Cart cart={cart}/> : <Navigate to="/login"/>}
/>
<Route path="/order-success" element={<OrderSuccess />} />
<Route path="/profile" element={<Profile />} />
<Route path="/profile-details" element={<ProfileDetails />} />
<Route path="/favorites" element={<Favorites />} />
<Route path="/address" element={<Address />} />
<Route path="/payment" element={<Payment />} />
<Route path="/rewards" element={<Rewards />} />
<Route path="/help" element={<Help />} />
<Route path="/payment-success" element={<PaymentSuccess/>}/>
<Route path="/payment-wait" element={<PaymentWait />} />
<Route path="/tracking" element={<Tracking />} />
<Route path="/orders" element={<OrderHistory />} />
</Routes>

</Router>

);

}

export default App;