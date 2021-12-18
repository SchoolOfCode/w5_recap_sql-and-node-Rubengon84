// Import query function from index.js
import query from "../index.js";
// Import cats object from app.js
import {cats} from "../../app.js";  

// Function for populate the table in the cloud data-base with the information from cats object
async function populateCatsTable() {
  // Loop to go trought all the elements in cats object and insert into the table in the cloud data-base
  for(let i = 0; i < cats.length; i++) {
    // Declare the variables with the value from cats[i]
    let {name, human, hobby} = cats[i];
    // Call the function query to send a sql query to introduce the variables declared before into the table in the cloud data-base 
    const res = await query(`INSERT INTO cats (name, human, hobby) VALUES ($1, $2, $3);`,[name, human, hobby]);
    console.log(res);
  }  
}
// Call the function populateCatsTable
populateCatsTable()