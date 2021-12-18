// Import cat object from app
import {cats} from "../app.js";

// function returning all the cats in cats object
export function getAllCats() {
  return cats;
}

// function returning a cat by Id
export function getCatById(id) {
  // Get the cat that match Id by .find method
  const cat = cats.find(element => element.id === id);
  return cat;
}

// Function returning a cat by name
export function getCatByName(name) {
  // Get the car that match name by .find method, comparing the two names in lowercase
  const cat = cats.find(element => element.name.toLocaleLowerCase() === name);
  return cat;
}