
import PIZZASERVICE from "../services/pizzaService.js"

window.addEventListener("DOMContentLoaded",bindEvents);

function bindEvents(){
    getPizzaData();
}

async function getPizzaData(){
    const data = await PIZZASERVICE.getData();
    printdata(data)
}

function printdata(data){
  const pizzas = data.pizzas;
 
  let pizzaList = document.getElementById("pizzaList");

  pizzas.forEach(pizza => {
    console.log(pizza);
    let card = document.createElement("div");
    card.classList.add("card")
    card.innerHTML = `
    <div class="pizzaImg">
    <img src=${pizza.image_url} />
    </div>
          <div class="cardBody">
            <h2 class="title">${pizza.name}</h2>
            <div class="desc">${pizza.description}</div>
            <div class="price">Price : ${pizza.price}</div>
          </div>
    <div><button>Add to card </button></div>
    `
    pizzaList.appendChild(card);
  });
}



