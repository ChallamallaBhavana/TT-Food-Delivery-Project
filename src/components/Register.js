import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Register() {

const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");

const handleRegister = () => {

if(!name || !email || !password){
alert("Please fill all required fields");
return;
}

const user = {
name,
email,
password,
phone,
address
};

localStorage.setItem("user", JSON.stringify(user));

alert("Registration Successful");

navigate("/login");

};

return (

<div className="register-container">

<h2>Register</h2>

<input 
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input 
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input 
placeholder="Password"
type="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<input 
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<input 
placeholder="Address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
/>

<button onClick={handleRegister}>
Register
</button>

<p>
Already have account ? 
<span 
style={{color:"red",cursor:"pointer"}}
onClick={()=>navigate("/login")}
>
 Login
</span>
</p>

</div>

);

}

export default Register;