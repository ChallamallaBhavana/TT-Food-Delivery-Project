import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function Login({login}){

const navigate = useNavigate();

const handleLogin = ()=>{

login();
navigate("/");

}

return(

<div className="login">

<h2>Login</h2>

<input placeholder="Email"/>
<input placeholder="Password" type="password"/>

<button onClick={handleLogin}>
Login
</button>

</div>

)

}

export default Login;