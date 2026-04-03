import React, {useState} from "react";
import "../styles/style.css";

function ProfileDetails(){

const user = JSON.parse(localStorage.getItem("user"));

const [image,setImage] = useState(
localStorage.getItem("profileImage")
);

const handleImage = (e)=>{

const file = e.target.files[0];

if(!file) return;

const reader = new FileReader();

reader.onloadend = ()=>{
localStorage.setItem("profileImage",reader.result);
setImage(reader.result);
alert("Profile picture updated");
}

reader.readAsDataURL(file);

};

const removeImage = ()=>{

localStorage.removeItem("profileImage");
setImage(null);

};

return(

<div className="profile-details-container">

<h2>👤 Profile Details</h2>

<div className="profile-card">

<img 
src={image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
alt="Profile"
className="profile-image"
/>

<div className="profile-buttons">

<input 
type="file" 
onChange={handleImage}
/>

<button onClick={removeImage}>
Remove Photo
</button>

</div>

<div className="profile-info">

<p><b>Name:</b> {user?.name || "Guest User"}</p>

<p><b>Email:</b> {user?.email || "Not Available"}</p>

</div>

</div>

</div>

)

}

export default ProfileDetails;