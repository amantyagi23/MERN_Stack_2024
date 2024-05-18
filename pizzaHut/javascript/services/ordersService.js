import { Order } from "../model/orders.js";
import PIZZASERVICE from "./pizzaService.js";

const ORDERSERVICES = {
    orderList:[], //database
    totalBill:0,
    count :0,
    addToCart(pizzaId){
        const pizza =  PIZZASERVICE.serachPizza(pizzaId);
       
      
        let order =  this.orderList.find((order)=>order.pizzaId == pizzaId);

        if(order!=null){
            order.count = order.count +1;
            this.totalBill = this.totalBill + this.makeBill(pizza.price);
        }
        else{
            let orderObj = new Order(this.count,1,pizza.id,"Aman ",1);
            this.count = this.count + 1;
            this.totalBill = this.totalBill + this.makeBill(pizza.price);
            this.orderList.push(orderObj);
        }
        
        // console.log(this.orderList);
    },
    getOrders(){
        // orderId,price,count,pizza name 

        let orders = []
        this.orderList.forEach((order)=>{
            console.log(order);
            let pizza = PIZZASERVICE.serachPizza(order.pizzaId);
            let pizzaDetails = {
                orderId : order.orderId,
                name:pizza.name,
                price :pizza.price,
                count : order.count
            }
            orders.push(pizzaDetails);
        })

        return orders;
    },
    incDecCount(orderId,value){
        let order = this.orderList.find((order)=>order.orderId==orderId);

        if(value == "+"){
            order.count = order.count + 1;
        }
      else if(value == "-"){
        order.count = order.count - 1
        }
    },
    getTotalOrders(){
        let count = 0;
        this.orderList.forEach(order=>{count = count + order.count})
        return count;
    },
    getTotalBill(){
        return this.totalBill;
    },
    makeBill(value){
        return parseFloat(value.slice(1));
    }
}

export default ORDERSERVICES;