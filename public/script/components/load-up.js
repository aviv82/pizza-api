// import { from } from "form-data.js";
import { bigFetch } from "../api/big-fetch.js";

export const loadUp = async () => {
  const root = document.getElementById("user-input");
  const userForm = document.createElement("form");
  userForm.id = "user-form";
  const sizeSearch = "sizes";
  const sizeData = await bigFetch(sizeSearch);
  console.log(sizeData);
  console.log(sizeData.data[1].attributes.size);
  console.log(sizeData.data.length);

  const sizeSelect = document.createElement("select");
  sizeSelect.name = "size";
  sizeSelect.id = "size-select";
  sizeSelect.innerHTML = `<option value="">--Please choose an option--</option>`;
  for (let i = 0; i < sizeData.data.length; i++) {
    const size = sizeData.data[i].attributes.size;
    const optionEl = document.createElement("option");
    optionEl.value = `${size}`;
    optionEl.innerHTML = `${size}`;
    sizeSelect.appendChild(optionEl);
  }
  userForm.innerHTML = `<label for="size-select">Choose a size:</label>`;
  userForm.appendChild(sizeSelect);

  const doughSearch = "doughs";
  const doughData = await bigFetch(doughSearch);
  console.log(doughData);
  console.log(doughData.data[1].attributes.type);
  console.log(doughData.data.length);

  const doughSelect = document.createElement("select");
  doughSelect.name = "dough";
  doughSelect.id = "dough-select";
  doughSelect.innerHTML = `<option value="">--Please choose an option--</option>`;

  for (let i = 0; i < doughData.data.length; i++) {
    const dough = doughData.data[i].attributes.type;
    const optionEl = document.createElement("option");
    optionEl.value = `${dough}`;
    optionEl.innerHTML = `${dough}`;
    doughSelect.appendChild(optionEl);
  }
  const doughFor = `<label for="dough-select">Choose a dough:</label>`;

  userForm.insertAdjacentHTML("beforeend", doughFor);
  userForm.appendChild(doughSelect);

  root.appendChild(userForm);
};
