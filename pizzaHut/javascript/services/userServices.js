const USERSERVICES={
    userList:[],
    isLogined:false,
    register(rawUser){

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