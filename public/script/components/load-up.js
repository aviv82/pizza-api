// import { from } from "form-data.js";
import { bigFetch } from "../api/big-fetch.js";

export const loadUp = async () => {
  const sizeSearch = "sizes";
  const sizeData = await bigFetch(sizeSearch);
  console.log(sizeData);
  console.log(sizeData.data[1].attributes.size);
  console.log(sizeData.data.length);
  const root = document.getElementById("size");
  const sizeForm = document.createElement("form");
  const selectEl = document.createElement("select");
  selectEl.name = "size";
  selectEl.id = "size-select";
  selectEl.innerHTML = `<option value="">--Please choose an option--</option>`;
  for (let i = 0; i < sizeData.data.length; i++) {
    const size = sizeData.data[i].attributes.size;
    const optionEl = document.createElement("option");
    optionEl.value = `${size}`;
    optionEl.innerHTML = `${size}`;
    selectEl.appendChild(optionEl);
  }
  sizeForm.innerHTML = `<label for="size-select">Choose a size:</label>`;
  sizeForm.appendChild(selectEl);
  root.appendChild(sizeForm);
};
