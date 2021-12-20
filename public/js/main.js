// First part of the api path
const url = "api"; 
// Select in the DOM the result area where the cats information will be printed
const catsSection = document.querySelector("#cats");
// Select all the buttons for making the requests
const submitButton = document.querySelectorAll("button[type='submit']");
// For each button, add an event-listener with the handleClick function
submitButton.forEach(button => button.addEventListener("click", handleClick));


// Function for making a fetch request for getting all the cats or cat by ID
async function getCats(id) {
  // Make a fetch request for getting the information from the data base
  const response = await fetch(`${url}/cats/${id}`);
  const { payload } = await response.json();
  console.log(payload);
  // For each cat information returned from the server, use the rendercat function to show it in the result area
  payload.forEach(renderCat);
}

// Function for making a fetch request for getting a cat by name
async function getCatsByName(name) {
  // Make a fetch request for getting the information from the data base with the name introduced in the url-request
  const response = await fetch(`${url}/cats?name=${name}`);
  const { payload } = await response.json();
  console.log(payload);
  // For each cat information returned from the server, use the rendercat function to show it in the result area
  payload.forEach(renderCat);
}

// Function for making a fetch request for creating or updating cats
async function addCatInfo(method, id) {
  console.log(gatherFormData());
  // Make a fetch request for creating or updating the information in the data base depends on the method that we pass
  const response = await fetch(`${url}/cats/${id}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gatherFormData()),
  });
  const data = await response.json();
  console.log(data);
}
// Function for making a fetch request for deleteting cat by Id from the data-base
async function deleteCatById(id) {
  // Make a fetch request for deleting a cat by id in the data-base
  const response = await fetch(`${url}/cats/${id}`, {method: "DELETE" });
  const data = await response.json();
  console.log(data);
}
// Get the Information from the form imputs to create or update a cat in the data-base
function gatherFormData() {
  const catName = document.querySelector("#catName").value;
  const humanName = document.querySelector("#humanName").value;
  const hobby = document.querySelector("#hobby").value;
  // Organixe the information as object for send it as request body in the fetch requests
  return {
    catName,
    humanName,
    hobby,
  };
}
// Function for hundle all the click events for the action-buttons
function handleClick(event) {
  event.preventDefault();
  // Reset the result area where the cats information will be printed
  catsSection.innerHTML = "";
  // Declare id and method variables for using on the methods
  let id ="";
  let method ="";
  // Conditional statement for checking which button is pressed and diverse it to the proper function with the information needs
  switch (event.target.name) {
    case 'getCats':
      // If user wants to get all the cat id will be empty, so will not afect the fetch url
      id = "";
      getCats(id);
      break;
    case 'getById':
      // If user wants to get the cat by id, id will be the value the input in that section and it will be introduce in the fetch-url
      id = document.querySelector("#get-cat-id").value;
      getCats(id);
      break;
    case 'getByName':
      // If user wants to get the cat by name, name will be the value the input in that section and it will be introduce in the fetch-url
      let name = document.querySelector("#get-cat-name").value;
      getCatsByName(name);
      break;
    case 'createCat':
      // If user wants to create a cat, the method passed in the fetch request will be POST and the id will be empty, so it will not interfare in the fetch url
      method = "POST";
      id = "";
      addCatInfo(method, id);
      break;
    case 'updateCat':
      // If user wants to update a cat, the method passed in the fetch request will be PUT and id will be the value introduce for user in that section, and it will pass in the fetch-url
      method = "PUT"
      id = document.querySelector("#update-cat-id").value;
      addCatInfo(method, id);
      break;
      // If user wants to delete a cat, it will take the id from that section and passed to the fetch-url for deleting a cat
    case 'deleteCat':
      id = document.querySelector("#delete-id").value;
      deleteCatById(id);
      break;
  }
}

// Function for adding all the cats elements create from the information requested to the main resul area
function renderCat(cat) {
  const article = createCatArticle(cat);
  catsSection.appendChild(article);
}
// Function for creating cats with the information that user get from the ftech-requests 
function createCatArticle({ id, name, human, hobby }) { // change the destructured variables to match the object from the payload
  const article = document.createElement("article");
  const h2CatName = document.createElement("h2");
  const idSpan = document.createElement("span");
  idSpan.innerText = `ID:${id}`;
  h2CatName.innerText = `Cat name: ${name}`;
  const h3HumanName = document.createElement("h3");
  h3HumanName.innerText = `Human servant: ${human}`;
  const h3Hobby = document.createElement("h3");
  h3Hobby.innerText = `Favorite hobby: ${hobby}`;
  article.appendChild(idSpan);
  article.appendChild(h2CatName);
  article.appendChild(h3HumanName);
  article.appendChild(h3Hobby);
  return article;
}
// Get the labels from the create-update section
const createUpdateLabels = document.querySelectorAll("#h2Container h2");

// Function to handle the clicks on the create-update labels, for showinf diferent colors and elements depends of the label active
function handleLabelClick(event) {
  // Variable to check in the conditional
  let label = event.target.id;
  // Elements that will change depends of the selected label
  let createLabel = document.querySelector("#createLabel");
  let updateLabel = document.querySelector("#updateLabel");
  let updateElements = document.querySelectorAll(".update");
  let createButton = document.querySelector("#create-cat");
  
  if(label === "createLabel" ) {
    createLabel.setAttribute("class", "create-update selectedLAbel");
    updateLabel.setAttribute("class", "create-update");
    updateElements.forEach(element => element.style.display = "none");
    createButton.style.display = "block";
  }else if (label === "updateLabel" )  {
    createLabel.setAttribute("class", "create-update");
    updateLabel.setAttribute("class", "create-update selectedLAbel");
    updateElements.forEach(element => element.style.display = "inline-block");
    createButton.style.display = "none";
  }

}
// Add event listener to the labels for changing colors and elements in the create-update sections
createUpdateLabels.forEach( label => label.addEventListener("click", handleLabelClick));