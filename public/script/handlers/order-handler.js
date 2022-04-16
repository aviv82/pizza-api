import { ORIGIN, jwt } from "../config.js";
import { createPizza } from "../components/create-pizza.js";
import { createOrder } from "../components/create-order.js";
import { bigFetch } from "../api/big-fetch.js";

export const orderHandler = async (event) => {
  // collect user input
  // event.preventDefault(); //Alina: stop the form submitting, if put #order-button into form element, we'll need it, for backup.
  const size = document.getElementById("size-select").value;
  const dough = document.getElementById("dough-select").value;
  const toppings = Array.from(document.getElementsByClassName("fav-toppings"))
    .filter((ele) => ele.checked)
    .map((item) => item.id);

  // create the pizza data in strapi
  const myPizza = await createPizza(size, dough, toppings);

  // get the pizza data in strapi
  const pizzaSearch = "pizzas?sort=id:desc&populate=*";
  const getMyPizza = await bigFetch(pizzaSearch);
  const myPizzaId = getMyPizza.data[0].id;

  // create order data in strapi
  const myOrder = await createOrder(myPizzaId);

  // get the customized pizza data from strapi and
  const orderSearch = "orders?sort=id:desc&populate=*";
  const getMyOrder = await bigFetch(orderSearch);
  // console.log("getMyOrder:", getMyOrder);

  // # todo: render order info to user: will crate at another feature branch
  return getMyOrder;
};
