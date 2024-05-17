
import ORDERSERVICES from "../services/ordersService.js";
import PIZZASERVICE from "../services/pizzaService.js"

window.addEventListener("DOMContentLoaded",bindEvents);

function bindEvents(){
    getPizzaData();
}

async function getPizzaData(){
    const pizzaList = await PIZZASERVICE.getData();
    printdata(pizzaList)
}

function printdata(pizzas){
  // const pizzas = data.pizzas;
 
  let pizzaList = document.getElementById("pizzaList");
 
  pizzas.forEach(pizza => {
    let card = document.createElement("div");
    card.classList.add("card");
    let cardImage = document.createElement("div");
    let img = document.createElement("img")
    img.src = pizza.imageurl
    cardImage.appendChild(img);
    card.appendChild(cardImage)

    let cardBody = document.createElement("div");
    cardBody.classList.add("cardBody")
    let title = document.createElement("div");
    title.innerText = pizza.name
    let desc = document.createElement("div");
    desc.innerText = pizza.desc
    let price = document.createElement("div");
    price.innerText = pizza.price

    cardBody.appendChild(title);
    cardBody.appendChild(desc);
    cardBody.appendChild(price);
    card.appendChild(cardBody);

    let btn = document.createElement("button");

    btn.setAttribute("pizzaId",pizza.id);

    btn.addEventListener("click",addToCart)

    btn.innerText = "Add To Card"
    card.appendChild(btn)
    pizzaList.appendChild(card);
    // card.innerHTML = `
    // <div class="pizzaImg">
    // <img src=${pizza.imageurl} />
    // </div>
    //       <div class="cardBody">
    //         <h2 class="title">${pizza.name}</h2>
    //         <div class="desc">${pizza.desc}</div>
    //         <div class="price">Price : ${pizza.price}</div>
    //       </div>
    // <div><button class="addToCart" >Add to card </button></div>
    // `
    
    // pizzaList.appendChild(card);
    // document.querySelector(".addToCart").addEventListener("click",addToCart)
  });

  
 
}

function addToCart(){
  const value = this.getAttribute("pizzaId");
  console.log(value);
 ORDERSERVICES.addToCart(value);
  // alert("yess")
  printOrders();
}

function printOrders(){
 const orderList = ORDERSERVICES.getOrders();
// <li>
//               <div class="pizza Name">Pepperoni</div>
//               <div class="pizza price">$12.99</div>
//               <div class="pizza count">2</div>
//             </li>

   const ul  = document.getElementById("orderList");
   ul.innerHTML = ""
   orderList.forEach((order)=>{
    const li = document.createElement("li");

 li.innerHTML = `<div class="pizza Name">${order.name}</div>
                <div class="pizza price">${order.price}</div>
               <div class="pizza count">${order.count}</div>`

      ul.appendChild(li)
   })

document.getElementById("orderCount").innerText = ORDERSERVICES.getTotalOrders();
console.log(ORDERSERVICES.getTotalBill());
document.getElementById("totalBill").innerText = ORDERSERVICES.getTotalBill();


}

