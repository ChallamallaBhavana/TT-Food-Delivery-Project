import React,{useState} from "react";
import "../styles/style.css";

function FoodChatBot(){

const [message,setMessage] = useState("");
const [chat,setChat] = useState([]);

const reply = (msg)=>{

msg = msg.toLowerCase();

if(msg.includes("hungry"))
return "Try Biryani or Pizza";

if(msg.includes("sweet"))
return "Try Desserts or Ice Cream";

if(msg.includes("healthy"))
return "Try Tiffins";

if(msg.includes("spicy"))
return "Try Chicken Biryani";

return "Try our Popular Foods!";
};

const sendMessage = ()=>{

const botReply = reply(message);

setChat([
...chat,
{user:message},
{bot:botReply}
]);

setMessage("");

};

return(

<div className="chat-box">

<h3>🤖 AI Food Assistant</h3>

<div className="chat-area">

{chat.map((c,index)=>(

<div key={index}>

{c.user && <p>👤 {c.user}</p>}
{c.bot && <p>🤖 {c.bot}</p>}

</div>

))}

</div>

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Ask me what to eat..."
/>

<button onClick={sendMessage}>
Send
</button>

</div>

)

}

export default FoodChatBot;