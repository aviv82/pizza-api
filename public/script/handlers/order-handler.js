import { ORIGIN, jwt } from "../config.js";
import { createPizza } from "../components/create-pizza.js";
import { createOrder } from "../components/create-order.js";
import { bigFetch } from "../api/big-fetch.js";
import { userInputData } from '../../data.js'; // Alina: data.js store tmp user input.
import { loadUp } from '../components/load-up.js';

export const orderHandler = async (event) => {
  // collect user input
  /*  version 1: works 
  // for index.html version 1(aviv: using form section collect user input)  
  // event.preventDefault(); //Alina: stop the form submitting, if put #order-button into form element, we'll need it, for backup.
  const size = document.getElementById("size-select").value;
  const dough = document.getElementById("dough-select").value;
  const toppings = Array.from(document.getElementsByClassName("fav-toppings"))
    .filter((ele) => ele.checked)
    .map((item) => item.id);
*/

/* version 2: for index.html version 2 (Mick: using div section collect user input)*/
const size = userInputData.sizeId;
const dough = userInputData.doughId;
const toppings = userInputData.toppingIds;

  // create the pizza data in strapi
  const myPizza = await createPizza(size, dough, toppings);

  // get the pizza data in strapi
  const pizzaSearch = "pizzas?sort=id:desc&populate=*";
  const getMyPizza = await bigFetch(pizzaSearch);
  console.log("getMyPizza:", getMyPizza) //
  const myPizzaId = getMyPizza.data[0].id;

  // create order data in strapi
  const myOrder = await createOrder(myPizzaId);

  // get the customized pizza data from strapi 
  const orderSearch = "orders?sort=id:desc&populate=*";
  const getMyOrder = await bigFetch(orderSearch);
  // console.log("getMyOrder:", getMyOrder);

  // clean tmp user input in "memory" 
  Object.keys(userInputData).forEach(key => delete userInputData.key);
  // clean #content-container and rerender ui
  document.getElementById("content-container").innerHTML = '';
  loadUp();

  // # todo: render order info to user: will crate at another feature branch
  return getMyOrder;
};
