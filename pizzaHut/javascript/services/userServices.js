import User from "../model/user.js"

const USERSERVICES={
    userList:[{
        userId:98,
        username:"Aman Tyagi",
        email:"aman@gmail.com",
        password:"123456"
    }],
    isLogined:false,
    uid:0,
    register(username,email,password){
        const userObject = new User(this.uid,username,email,password);
        this.uid = this.uid +1;
        this.userList.push(userObject);
        return true;
    },
    login(email,password){
        console.log(email,password);

        console.log(this.userList);
        const userObj = this.userList.find((user)=>user.email == email);

        if(userObj != undefined ){
            if(userObj.password == password){
                this.isLogined = true
                return true
            }
            return false
        }
        return false
        
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