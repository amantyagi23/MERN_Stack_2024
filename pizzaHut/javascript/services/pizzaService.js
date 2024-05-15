import { CONFIG } from "../config/index.js"
import { Pizza } from "../model/pizza.js";
const PIZZASERVICE = {

  pizzaList:[],

  async getData(){
    const response = await fetch(CONFIG.getDataURL);
    const data  = await response.json();

    let count = 0;
    for (const pizza of data.pizzas) {
     let pizzObj = new Pizza(count,pizza.name , pizza.description,pizza.image_url,pizza.price);
     console.log(pizzObj);
     this.pizzaList.push(pizzObj)
     count++;
    }


    return this.pizzaList;
   },

   

}

export default PIZZASERVICE;