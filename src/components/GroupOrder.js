import React,{useState} from "react";
import "../styles/style.css";

function GroupOrder(){

const [people,setPeople] = useState("");
const [total,setTotal] = useState("");
const [split,setSplit] = useState(null);

const calculateSplit = ()=>{

if(people && total){
setSplit((total/people).toFixed(2));
}

};

return(

<div className="feature-box">

<h2>🍽 Group Order Split</h2>

<input
placeholder="Number of People"
value={people}
onChange={(e)=>setPeople(e.target.value)}
/>

<input
placeholder="Total Amount"
value={total}
onChange={(e)=>setTotal(e.target.value)}
/>

<button onClick={calculateSplit}>
Split Bill
</button>

{split && (

<h3>Each Person Pays ₹{split}</h3>

)}

</div>

)

}

export default GroupOrder;