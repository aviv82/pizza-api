// import { from } from "form-data.js";
import { bigFetch } from "../api/big-fetch.js";
// import { pizzaHandler } from "../handlers/pizza-handler.js";

export const loadUp = async () => {
  const root = document.getElementById("content-container");

  const sizeSearch = "sizes";
  const sizeData = await bigFetch(sizeSearch);
  console.log(sizeData);

  let sizeItems = "";

  sizeData.data.forEach(async (size) => {
    const sizeName = size.attributes.size;
    const description = size.attributes.description;
    sizeItems += `

    <div class="size-divs" id="${sizeName}-container" data-size="${sizeName}">
      <h3>${description}</h3>
    </div> 
    `;
  });

  const sizeContainer = document.createElement("div");
  sizeContainer.classList.add("size-content-container");

  const sizeDiv = document.createElement("div");
  sizeDiv.id = "size-select-container";

  const orderTitleDiv = document.createElement("h2");
  orderTitleDiv.innerHTML = "How hungry are you?";

  const sizeOutput = document.createElement("div");

  sizeContainer.appendChild(orderTitleDiv);
  sizeContainer.appendChild(sizeDiv);
  sizeContainer.appendChild(sizeOutput);

  root.appendChild(sizeContainer);

  sizeDiv.innerHTML = sizeItems;

  const sizeQuery = [...document.querySelectorAll("div.size-divs")];
  // console.log(sizeQuery);

  let sizeChoice = "";
  sizeQuery.forEach((sizeEl) => {
    sizeEl.addEventListener("click", () => {
      console.log("clicked");
      // console.log(sizeEl.dataset.size);
      sizeChoice = sizeEl.dataset.size;
      sizeOutput.innerHTML = `<p class="choice">Your choice: ${sizeChoice}</p>`;
    });
  });

  // console.log(sizeChoice);

  const doughSearch = "doughs";
  const doughData = await bigFetch(doughSearch);
  console.log(doughData);

  let doughItems = "";

  doughData.data.forEach(async (dough) => {
    const doughType = dough.attributes.type;
    const doughDescription = dough.attributes.description;
    doughItems += `

    <div class="dough-divs" id="${doughType}-container" data-dough="${doughType}">
      <h3>${doughDescription}</h3>
    </div> 
    `;
  });

  const doughContainer = document.createElement("div");
  doughContainer.classList.add("dough-content-container");

  const doughDiv = document.createElement("div");
  doughDiv.id = "dough-select-container";

  const doughTitleDiv = document.createElement("h2");
  doughTitleDiv.innerHTML = "What about the dough tho?";

  const doughOutput = document.createElement("div");

  doughContainer.appendChild(doughTitleDiv);
  doughContainer.appendChild(doughDiv);
  doughContainer.appendChild(doughOutput);

  root.appendChild(doughContainer);

  doughDiv.innerHTML = doughItems;

  const doughQuery = [...document.querySelectorAll("div.dough-divs")];
  // console.log(sizeQuery);

  let doughChoice = "";
  doughQuery.forEach((doughEl) => {
    doughEl.addEventListener("click", () => {
      console.log("clicked");
      // console.log(sizeEl.dataset.size);
      doughChoice = doughEl.dataset.dough;
      doughOutput.innerHTML = `<p class="choice">Your choice: ${doughChoice}</p>`;
    });
  });



  const toppingSearch = "toppings";
  const toppingData = await bigFetch(toppingSearch);
  console.log(toppingData);

  let toppingItems = "";

  toppingData.data.forEach(async (topping) => {
    const toppingType = topping.attributes.toppingName;
    // const doughDescription = dough.attributes.description;
    toppingItems += `

    <div class="topping-divs" id="${toppingType}-container" data-topping="${toppingType}">
      <h3>${toppingType}</h3>
    </div> 
    `;
  });

  const toppingContainer = document.createElement("div");
  toppingContainer.classList.add("topping-content-container");

  const toppingDiv = document.createElement("div");
  toppingDiv.id = "topping-select-container";

  const toppingTitleDiv = document.createElement("h2");
  toppingTitleDiv.innerHTML = "Over the top toppings:";

  const toppingOutput = document.createElement("div");

  toppingContainer.appendChild(toppingTitleDiv);
  toppingContainer.appendChild(toppingDiv);
  toppingContainer.appendChild(toppingOutput);

  root.appendChild(toppingContainer);

  toppingDiv.innerHTML = toppingItems;

  const toppingQuery = [...document.querySelectorAll("div.topping-divs")];
  // console.log(sizeQuery);

  let toppingChoice = "";
  let toppingArray = [];

  toppingQuery.forEach((toppingEl) => {
    toppingEl.addEventListener("click", () => {
      console.log("clicked");
      // console.log(sizeEl.dataset.size);
      toppingChoice = toppingEl.dataset.topping;
      toppingArray.push(toppingChoice);
      console.log(toppingArray)
      toppingOutput.innerHTML = `<p class="choice">Your choice: ${toppingArray.join(', ')}</p>`;
    });
  });


  const customerContainer = document.createElement("div");
  customerContainer.classList.add("customer-content-container");

  const customerDiv = document.createElement("div");
  customerDiv.id = "customer-select-container";

  const customerTitleDiv = document.createElement("h2");
  customerTitleDiv.innerHTML = "Tell us who you are and come enjoy your pizza:";

  const customerOutput = document.createElement("div");

  customerContainer.appendChild(customerTitleDiv);
  customerContainer.appendChild(customerDiv);
  customerContainer.appendChild(customerOutput);

  const customerInput = document.createElement("input");
  customerInput.setAttribute("type", "text");
  customerInput.classList.add("customer-input");
  customerDiv.appendChild(customerInput);

  root.appendChild(customerContainer);


  document.getElementById("order-button").addEventListener("click", () => {
    console.log("click");
    let pizza = {
      size: sizeChoice,
      type: doughChoice,
      toppings: toppingArray,
      userName: customerInput.value
    };
    console.log(pizza);
  });

  // const topSearch = "toppings";
  // const topList = document.createElement("ul");
  // topList.id = "toppings-list";
  // const topData = await bigFetch(topSearch);
  // let topCheckboxes = "";

  // topData.data.forEach(async (topping) => {
  //   const topName = topping.attributes.toppingName;
  //   topCheckboxes += `
  //   <input type="checkbox" id="${topName}" name="${topName}"
  // checked>
  // <label for="${topName}">${topName}</label>
  // `;
  // });

  // topList.innerHTML = topCheckboxes;
  // userForm.appendChild(topList);

  // root.appendChild(userForm);
};
