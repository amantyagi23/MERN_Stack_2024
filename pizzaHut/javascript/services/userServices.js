import User from "../model/user.js"

const USERSERVICES={
    userList:[],
    isLogined:false,
    uid:0,
    register(username,email,password){
        const userObject = new User(this.uid,username,email,password);
        this.uid = this.uid +1;
        this.userList.push(userObject);
        return true;
    },
    login(email,password){
        
        this.isLogined = true
    },
    logout(){
        this.isLogined = false
    },
    getUser(){

    },
    updateUser(){

    },
    isAuth(){
        return this.isLogined
    }
}

export default USERSERVICES;