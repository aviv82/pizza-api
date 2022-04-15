import { ORIGIN, jwt } from "../config.js";
import { createPizza } from "../components/create-pizza.js";
import { createOrder } from "../components/create-order.js";
// const ORIGIN = "http://localhost:1337/api/";
/* 
    /api/doughs/:id
    /api/orders/:id
    /api/pizzas/:id
    /api/sizes/:id
    /api/toppings/:id
    */

export const orderHandler = async (event) => {
  //   collect user input
  event.preventDefault(); //stop the form submitting, may not need?
  const size = document.getElementById("size-select").value;
  console.log("size:", size);
  const dough = document.getElementById("dough-select").value;
  console.log("dough:", dough);
  const toppings = Array.from(document.getElementsByClassName("fav-toppings"))
    .filter((ele) => ele.checked)
    .map((item) => item.id);
  console.log("toppings:", toppings);
  // post pizza data in strapi
  const myPizza = await createPizza(size, dough, toppings);
  const pizzaId = await myPizza.id;
  // create order data in strapi
  const myOrder = await createOrder(pizzaId);
  // get the customized pizza data from strapi and render info to user
  return myOrder;
};
