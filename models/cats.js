// Import cat object from app
//import {cats} from "../app.js";

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
     WHERE cats.name ILIKE '%'|| $1 || '%';`,[name]
  );
  
  return cat.rows;
}

// Create a row by a given information
export async function createCat(cat) {
  // Declare the variables to update and asign to the information passed from cat
  const name = cat.catName;
  const human = cat.humanName;
  const hobby = cat.hobby;
    // Call the function query to send a sql query to create a row in the cloud data-base by the variables declared before
  let res = await query(
    `INSERT INTO cats (name, human, hobby) VALUES ($1, $2, $3);`, [name, human, hobby]
  );
  return res;
}


// Update row by a given Id and the information to update
export async function updateCat(id,cat) {
  // Declare the variables to update and asign to the information passed from cat
  const name = cat.catName;
  const human = cat.humanName;
  const hobby = cat.hobby;
  // Call the function query to send a sql query to update the id row in the cloud data-base by the variables declared before 
  let res= await query(
    `UPDATE cats
     SET name = $1, human = $2, hobby = $3
     WHERE cats.id = $4;`, [name, human, hobby, id]
  );
  console.log(res);
}


// Delete a row by a given Id
export async function deleteCat(id) {
   // Call the function query to send a sql query to Delete a row in the cloud data-base by Id 
  let res = await query(
    `DELETE FROM cats
     WHERE cats.id = $1;`, [id]
  );
  console.log(res);
}