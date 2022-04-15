import { ORIGIN, jwt } from "../config.js";

// const ORIGIN = "http://localhost:1337/api/";
export const createPizza = async (size, dough, toppings = []) => {
  /* 
    /api/doughs/:id
    /api/orders/:id
    /api/pizzas/:id
    /api/sizes/:id
    /api/toppings/:id
    */
  const path = "pizzas";
  const body = {
    data: {
      size: size,
      dough: dough,
      toppings: toppings,
    },
  };
  const url = `${ORIGIN}${path}`;
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}`,
    },
    body: JSON.stringify(body),
  });
  console.log("response.json:");
  return response.json();
};

/* 
async function createNewCategory(name, description) {
  const path = 'categories';
  const body = {
    data: {
      name: name,
      description:description
    }
  };
  const url = `http://localhost:1337/api/${path}`
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body) 
  });
  return response.json();
}

createNewCategory("Demo category", "This is a cool category made by an api call")
*/
