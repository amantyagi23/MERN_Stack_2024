import { auth, signInWithEmailAndPassword } from "../config/fireBaseConfig.js";

window.addEventListener("DOMContentLoaded",bindEvents);

function bindEvents(){
    document.getElementById("loginForm").addEventListener("submit",signup);
   
}

async function signup(event){
    event.preventDefault();
    
    const email = this.email.value;
    const password= this.password.value;
   
   try {
    const response  = await signInWithEmailAndPassword(auth,email,password);
    console.log(response);
    // alert("user Login successfully")
    localStorage.setItem("isAuth",true);
    // window.location.href = "/netflix-clone/index.html"
   } catch (error) {
    alert(`Error in Creating ${error}`)
   }
}