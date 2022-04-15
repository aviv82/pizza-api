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
  orderTitleDiv.innerHTML = "Please pick a size:";

  const sizeOutput = document.createElement("div");

  sizeContainer.appendChild(orderTitleDiv);
  sizeContainer.appendChild(sizeDiv);
  sizeContainer.appendChild(sizeOutput);

  root.appendChild(sizeContainer);

  sizeDiv.innerHTML = sizeItems;

  const sizeQuery = [...document.querySelectorAll("div.size-divs")];
  console.log(sizeQuery);

  let sizeChoice = "";
  sizeQuery.forEach((sizeEl) => {
    sizeEl.addEventListener("click", () => {
      console.log("clicked");
      // console.log(sizeEl.dataset.size);
      sizeChoice = sizeEl.dataset.size;
      sizeOutput.innerHTML = sizeChoice;
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
  doughTitleDiv.innerHTML = "Please pick a dough:";

  const doughOutput = document.createElement("div");

  doughContainer.appendChild(doughTitleDiv);
  doughContainer.appendChild(doughDiv);
  doughContainer.appendChild(doughOutput);

  root.appendChild(doughContainer);

  doughDiv.innerHTML = doughItems;

  const doughQuery = [...document.querySelectorAll("div.dough-divs")];
  console.log(sizeQuery);

  let doughChoice = "";
  doughQuery.forEach((doughEl) => {
    doughEl.addEventListener("click", () => {
      console.log("clicked");
      // console.log(sizeEl.dataset.size);
      doughChoice = doughEl.dataset.dough;
      doughOutput.innerHTML = doughChoice;
    });
  });


  document.getElementById("order-button").addEventListener("click", () =>
{
  console.log("click");
  let pizza = {
    size: sizeChoice,
    type: doughChoice,
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






