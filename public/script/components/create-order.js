import { ORIGIN, jwt } from "../config.js";

export const createOrder = async (pizzaId) => {
  // debugger;
  const path = `orders`;
  const body = {
    data: {
      name: `order at ${Date.now()}`, //way 1: name with date, works
      // name: "myOrder name from js", // way 2: name with words, works
      description: "this is a order description form js",
      pizzas: { id: pizzaId },
    },
  };
  const url = encodeURI(`${ORIGIN}${path}`);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(body),
  });
  return response.json();
};
