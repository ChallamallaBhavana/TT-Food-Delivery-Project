import React,{useState} from "react";

function VoiceSearch({setSearch}){

const [listening,setListening] = useState(false);

const startListening = ()=>{

const recognition = new window.webkitSpeechRecognition();

recognition.onstart = ()=>setListening(true);

recognition.onresult = (event)=>{

const text = event.results[0][0].transcript;
setSearch(text);

};

recognition.onend = ()=>setListening(false);

recognition.start();

};

return(

<button onClick={startListening}>
🎤 {listening ? "Listening..." : "Voice Search"}
</button>

)

}

export default VoiceSearch;