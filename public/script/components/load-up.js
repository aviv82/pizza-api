// import { from } from "form-data.js";
import { bigFetch } from "../api/big-fetch.js";

export const loadUp = async () => {
  const root = document.getElementById("user-input");
  const userForm = document.createElement("form");
  userForm.id = "user-form";
  const sizeSearch = "sizes";
  const sizeData = await bigFetch(sizeSearch);

  const sizeSelect = document.createElement("select");
  sizeSelect.name = "size";
  sizeSelect.id = "size-select";
  sizeSelect.innerHTML = `<option value="">--Please choose an option--</option>`;
  for (let i = 0; i < sizeData.data.length; i++) {
    // Alina change size from small, medium, large, xl, to integer
    const size = sizeData.data[i].attributes.size;
    // const mySize = i + 1;
    const mySize = sizeData.data[i].id;
    //

    const optionEl = document.createElement("option");
    optionEl.value = `${mySize}`;
    optionEl.innerHTML = `${size}`;
    sizeSelect.appendChild(optionEl);
  }
  userForm.innerHTML = `<label for="size-select">Choose a size:</label>`;
  userForm.appendChild(sizeSelect);

  const doughSearch = "doughs";
  const doughData = await bigFetch(doughSearch);

  const doughSelect = document.createElement("select");
  doughSelect.name = "dough";
  doughSelect.id = "dough-select";
  doughSelect.innerHTML = `<option value="">--Please choose an option--</option>`;

  for (let i = 0; i < doughData.data.length; i++) {
    // Alina: change dough value from : classic, cheezy, pan to integer
    const dough = doughData.data[i].attributes.type;
    // const myDough = i + 1;
    const myDough = doughData.data[i].id;
    // 
    const optionEl = document.createElement("option");
    optionEl.value = `${myDough}`;
    optionEl.innerHTML = `${dough}`;
    doughSelect.appendChild(optionEl);
  }
  const doughFor = `<label for="dough-select">Choose a dough:</label>`;

  userForm.insertAdjacentHTML("beforeend", doughFor);
  userForm.appendChild(doughSelect);

  const topSearch = "toppings";
  const topData = await bigFetch(topSearch);
  const topList = document.createElement("ul");
  topList.id = "topping-list";
  topList.innerHTML = "Choose your favorite toppings:";
  for (let i = 0; i < topData.data.length; i++) {
    const topItem = document.createElement("li");
    const topName = topData.data[i].attributes.toppingName;
    const topInput = document.createElement("input");
    topInput.type = "checkbox";
    // Alina: add class name to checkbox
    topInput.className = "fav-toppings";
    // const myId = i + 1; // define the id
    const myId = topData.data[i].id;
    topInput.id = `${myId}`; // change the id to number
    const topLabel = document.createElement("label");
    topLabel.setAttribute("for", `${topName}`);
    topLabel.innerHTML = `${topName}`;
    topItem.appendChild(topInput);
    topItem.appendChild(topLabel);
    topList.appendChild(topItem);
  }

  userForm.appendChild(topList);

  root.appendChild(userForm);
};
