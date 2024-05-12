import { CONFIG } from "../config/index.js"
const PIZZASERVICE = {
  
  
  async getData(){
    const response = await fetch(CONFIG.getDataURL);
    const data  = await response.json();
    return data;
   }

}

export default PIZZASERVICE;