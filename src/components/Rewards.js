import React from "react";

function Rewards(){

const rewards = localStorage.getItem("rewards") || 120;

return(

<div style={{padding:"30px"}}>

<h2>🎁 Rewards</h2>

<h3>{rewards} Reward Points</h3>

</div>

)

}

export default Rewards;