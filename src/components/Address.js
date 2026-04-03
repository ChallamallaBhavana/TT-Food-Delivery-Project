import React, {useState} from "react";

function Address(){

const [address,setAddress]=useState(
localStorage.getItem("address") || ""
);

const saveAddress = () =>{
localStorage.setItem("address",address);
alert("Address Saved");
}

return(

<div style={{padding:"30px"}}>

<h2>📍 Saved Address</h2>

<textarea
placeholder="Enter Address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
/>

<br/><br/>

<button onClick={saveAddress}>
Save Address
</button>

<p><b>Saved:</b> {address}</p>

</div>

)

}

export default Address;