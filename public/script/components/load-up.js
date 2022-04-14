// import { from } from "form-data.js";
import { bigFetch } from "../api/big-fetch.js";

export const loadUp = async () => {
  // console.log('Here we need to render all the menu. First the fetch, then render all the general content for the HTML');
  const result = await bigFetch();
  console.log(result);

  const root = document.getElementById("dough");
  const doughForm = document.createElement("form");
  const selectEl = document.createElement("select");
  selectEl.name = "size";
  selectEl.id = "size-select";
  selectEl.innerHTML = `<option value="">--Please choose an option--</option>
  <option value="small">Small</option>
  <option value="medium">Medium</option>
  <option value="large">Large</option>`;
  doughForm.innerHTML = `<label for="dough-select">Choose a dough:</label>`;
  doughForm.appendChild(selectEl);
  root.appendChild(doughForm);
};
