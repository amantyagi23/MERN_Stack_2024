import USERSERVICES from "../services/userServices.js";

window.addEventListener("DOMContentLoaded",bindEvents);

function bindEvents(){
    document.getElementById("signupForm").addEventListener("submit",signup);
   
}

function signup(event){
    event.preventDefault();
    // console.log(this.username.value);
    const username = this.username.value;
    const email = this.email.value;
    const password= this.password.value;
   const response =  USERSERVICES.register(username,email,password);
   if(response == true){
    const resp =  alert("Register Successfully");
    console.log(resp);
    if(resp ===undefined){
        window.location.href = "/pizzaHut/login.html"
    }
   }
}


