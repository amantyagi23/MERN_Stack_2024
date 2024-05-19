import USERSERVICES from "../services/userServices";

window.addEventListener("DOMContentLoaded",bindEvents);

function bindEvents(){
    document.getElementById("signupForm").addEventListener("submit",signup);
    document.getElementById("loginForm").addEventListener("submit",login);
}

function signup(e){
    e.preventDefault();
    console.log(this.username.value);
    USERSERVICES.register();
}


function login(e){
    e.preventDefault();
    const email = this.email.value;
   const password  = this.password.value;
    USERSERVICES.login(email,password);

    if(USERSERVICES.isAuth()){
        window.location.href("/")
    }
}