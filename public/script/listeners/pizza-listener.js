// import { pizzaHandler } from '../handlers/pizza-handler.js';
import { orderHandler } from '../handlers/order-handler.js';

// export const pizzaListener = document.getElementById('order-button').addEventListener('click', pizzaHandler);
export const pizzaListener = () => {
    document.getElementById('order-button').addEventListener('click', orderHandler);
}; 
