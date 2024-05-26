import { auth, createUserWithEmailAndPassword } from "../config/fireBaseConfig.js";

window.addEventListener("DOMContentLoaded",bindEvents);

function bindEvents(){
    document.getElementById("signupForm").addEventListener("submit",signup);
   
}

async function signup(event){
    event.preventDefault();
    // console.log(this.username.value);
    const username = this.name.value;
    const email = this.email.value;
    const password= this.password.value;
   
   try {
    const response  = await createUserWithEmailAndPassword(auth,email,password);
    alert("user created")
    window.location.href = "/netflix-clone/login.html"
   } catch (error) {
    alert(`Error in Creating ${error}`)
   }
}