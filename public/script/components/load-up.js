// import { from } from "form-data.js";
import { bigFetch } from "../api/big-fetch.js";

export const loadUp = async () => {
  const root = document.getElementById("user-input");
  const userForm = document.createElement("form");
  userForm.id = "user-form";


  const doughSearch = "doughs";
  const doughData = await bigFetch(doughSearch);

  const doughSelect = document.createElement("select");
  doughSelect.name = "dough";
  doughSelect.id = "dough-select";

  const doughLabel = document.createElement("label");
  doughLabel.setAttribute("for", "dough-select");
  doughLabel.innerHTML = doughData.data[0].attributes.description;
  
  userForm.append(doughLabel);
  userForm.appendChild(doughSelect);

  let doughItems = "";

  doughData.data.forEach(async (dough) => {
    const doughName = dough.attributes.type;
    doughItems += `

    <select name="${doughName}" id="${doughName}">
      <option value="${doughName}">${doughName}</option>
    </select> 
    `;
  });
  doughSelect.innerHTML = doughItems;


  const sizeSearch = "sizes";
  const sizeData = await bigFetch(sizeSearch);
  console.log(sizeData)

  const sizeSelect = document.createElement("select");
  sizeSelect.name = "size";
  sizeSelect.id = "size-select";

  const sizeLabel = document.createElement("label");
  sizeLabel.setAttribute("for", "size-select");
  sizeLabel.innerHTML = sizeData.data[0].attributes.description;
  
  userForm.append(sizeLabel);
  userForm.appendChild(sizeSelect);

  let sizeItems = "";

  sizeData.data.forEach(async (size) => {
    const sizeName = size.attributes.size;
    sizeItems += `

    <select name="${sizeName}" id="${sizeName}">
      <option value="${sizeName}">${sizeName}</option>
    </select> 
    `;
  });
  sizeSelect.innerHTML = sizeItems;




  const topSearch = "toppings";
  const topList = document.createElement("ul");
  topList.id = "toppings-list";
  const topData = await bigFetch(topSearch);
  let topCheckboxes = "";

  topData.data.forEach(async (topping) => {
    const topName = topping.attributes.toppingName;
    topCheckboxes += `
    <input type="checkbox" id="${topName}" name="${topName}"
  checked>
  <label for="${topName}">${topName}</label>
  `;
  });

  topList.innerHTML = topCheckboxes;
  userForm.appendChild(topList);

  root.appendChild(userForm);
};


  // const sizeSearch = "sizes";
  // const sizeData = await bigFetch(sizeSearch);

  // const sizeSelect = document.createElement("select");
  // sizeSelect.name = "size";
  // sizeSelect.id = "size-select";
  // sizeSelect.innerHTML = `<option value="">--Please choose an option--</option>`;
  // for (let i = 0; i < sizeData.data.length; i++) {
  //   const size = sizeData.data[i].attributes.size;
  //   const optionEl = document.createElement("option");
  //   optionEl.value = `${size}`;
  //   optionEl.innerHTML = `${size}`;
  //   sizeSelect.appendChild(optionEl);
  // }
  // userForm.innerHTML = `<label for="size-select">Choose a size:</label>`;
  // userForm.appendChild(sizeSelect);

  // const doughSearch = "doughs";
  // const doughData = await bigFetch(doughSearch);

  // const doughSelect = document.createElement("select");
  // doughSelect.name = "dough";
  // doughSelect.id = "dough-select";
  // doughSelect.innerHTML = `<option value="">--Please choose an option--</option>`;

  // for (let i = 0; i < doughData.data.length; i++) {
  //   const dough = doughData.data[i].attributes.type;
  //   const optionEl = document.createElement("option");
  //   optionEl.value = `${dough}`;
  //   optionEl.innerHTML = `${dough}`;
  //   doughSelect.appendChild(optionEl);
  // }
  // const doughFor = `<label for="dough-select">Choose a dough:</label>`;

  // userForm.insertAdjacentHTML("beforeend", doughFor);
  // userForm.appendChild(doughSelect);

  // const topSearch = "toppings";
  // const topData = await bigFetch(topSearch);
  // const topList = document.createElement("ul");
  // topList.id = "topping-list";
  // topList.innerHTML = "Choose your favorite toppings:";
  // for (let i = 0; i < topData.data.length; i++) {
  //   const topItem = document.createElement("li");
  //   const topName = topData.data[i].attributes.toppingName;
  //   const topInput = document.createElement("input");
  //   topInput.type = "checkbox";
  //   topInput.id = `${topName}`;
  //   const topLabel = document.createElement("label");
  //   topLabel.setAttribute("for", `${topName}`);
  //   topLabel.innerHTML = `${topName}`;
  //   topItem.appendChild(topInput);
  //   topItem.appendChild(topLabel);
  //   topList.appendChild(topItem);
  // }

  // userForm.appendChild(topList);

  // const root = document.getElementById("user-input");
  // const userForm = document.createElement("form");
  // userForm.id = "user-form";
  // const sizeSearch = "sizes";
  // const sizeData = await bigFetch(sizeSearch);

  // const sizeSelect = document.createElement("select");
  // sizeSelect.name = "size";
  // sizeSelect.id = "size-select";
  // sizeSelect.innerHTML = `<option value="">--Please choose an option--</option>`;
  // for (let i = 0; i < sizeData.data.length; i++) {
  //   const size = sizeData.data[i].attributes.size;
  //   const optionEl = document.createElement("option");
  //   optionEl.value = `${size}`;
  //   optionEl.innerHTML = `${size}`;
  //   sizeSelect.appendChild(optionEl);
  // }
  // userForm.innerHTML = `<label for="size-select">Choose a size:</label>`;
  // userForm.appendChild(sizeSelect);