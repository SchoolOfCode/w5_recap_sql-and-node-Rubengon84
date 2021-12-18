// Import cat object from app
import {cats} from "../app.js";

import query from "../db/index.js";

// function returning all the cats in cats object
export async function getAllCats() {

  // Make async sql query to the database to retrieve all the information from the table cats
  const cats = await query(
    `SELECT * FROM cats;`
  );
  return cats.rows;
}

// function returning a cat by Id
export async function getCatById(id) {
  // Get the cat that match Id by .find method
  //const cat = cats.find(element => element.id === id);

  // Make async sql query to the database to retrieve the table matching the given Id
  const cat = await query(
    `SELECT * FROM cats
     WHERE cats.id = $1;`,[id]
  );
  return cat.rows;
}

// Function returning a cat by name
export async function getCatByName(name) {
  // Get the car that match name by .find method, comparing the two names in lowercase
  //const cat = cats.find(element => element.name.toLocaleLowerCase() === name);

  // Make async sql query to the database to retrieve the table matching the given name
  const cat = await query(
    `SELECT * FROM cats
     WHERE cats.name = $1;`,[name]
  );
  
  return cat.rows;
}