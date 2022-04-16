import { ORIGIN, jwt } from "../config.js";

export const createPizza = async (size, dough, toppings = []) => {
  const path = "pizzas";
  const body = {
    data: {
      name: "April 2022 innovation",
      description: "this is a fun recipe description", 
      size: size,
      dough: dough,
      toppings: toppings,
    },
  };
const url = encodeURI(`${ORIGIN}${path}`);
  const response = await fetch(url, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`,
    },
    body: JSON.stringify(body),
  });
  return response.json();
};



