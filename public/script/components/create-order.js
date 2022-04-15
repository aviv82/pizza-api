import { ORIGIN, jwt } from "../config.js";

// const ORIGIN = "http://localhost:1337/api/";

export const createOrder = async (pizzaId) => {
  /* 
    /api/doughs/:id
    /api/orders/:id
    /api/pizzas/:id
    /api/sizes/:id
    /api/toppings/:id
    */
  const path = `orders`;
  const body = {
    data: {
      name: `${Date.now()}`,
      pizza: { id: pizzaId },
    },
  };
  const url = `${ORIGIN}${path}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    // 'Content-type': 'text/plain', //not work
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(body),
  });
  console.log("order data:");
  return response.json();
};

/* 
async function createNewProduct(
  name,
  description,
  price,
  discountId,
  categoryId,
  outOfStock,
) {
  const path = `products/`; 
  const body = {
    data: {
      name: name,
      description: description,
      price: price,
      category: {id:categoryId},
      outOfStock: outOfStock,
      discount: {id:discountId}
    },
  };
  const url = `http://localhost:1337/api/${path}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  console.log("my product created")
  return response.json();
}
const description = 'this is a cool description created by Alina.'
// createNewProduct(name, description, price, discountId, categoryId, outOfStock);
createNewProduct('new name', description, 250, 2, 1, false);
 */
