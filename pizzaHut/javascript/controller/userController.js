import USERSERVICES from "../services/userServices.js";

window.addEventListener("DOMContentLoaded",bindEvents);

function bindEvents(){
    document.getElementById("loginForm").addEventListener("submit",login);
}




function login(e){
    e.preventDefault();
    const email = this.email.value;
   const password  = this.password.value;
   const resp =  USERSERVICES.login(email,password);
   console.log(resp);
   if(resp == true){
        if(USERSERVICES.isAuth()){
            window.location.href = "/pizzaHut/index.html"
        }
   }else{
    alert("Invalid email or password");
   }
    

}