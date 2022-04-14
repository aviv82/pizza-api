import { bigFetch } from "../api/big-fetch.js";

export const loadUp = async () => {
  // console.log('Here we need to render all the menu. First the fetch, then render all the general content for the HTML');
  const result = await bigFetch();
  console.log(result);
};
