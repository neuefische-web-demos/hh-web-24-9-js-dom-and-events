console.log("Hello from index.js!");

// DOM
// Document Object Model

// console.log("document: ", document);

const addButton = document.querySelector("[data-js='add-button']");
const removeButton = document.querySelector("[data-js='remove-button']");
const toggleButton = document.querySelector("[data-js='toggle-button']");

const bodyElement = document.querySelector('[data-js="body-element"]');

console.log("bodyElement: ", bodyElement);

addButton.addEventListener("click", () => {
  console.log("clicked on the button");
  // add the class .dark to the body
  bodyElement.classList.add("dark");
  // bodyElement.className = "dark";
});

removeButton.addEventListener("click", () => {
  console.log("remove button clicked");
  bodyElement.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
  console.log("toggle button clicked");
  bodyElement.classList.toggle("dark");
});
