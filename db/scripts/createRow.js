// Import query function from index.js
import query from "../index.js";

// Create a row by a given information
function createCat(cat) {
  // Declare the variables to update and asign to the information passed from cat
  const name = cat.name;
  const human = cat.human;
  const hobby = cat.hobby;
    // Call the function query to send a sql query to create a row in the cloud data-base by the variables declared before
  let res = query(
    `INSERT INTO cats (name, human, hobby) VALUES ($1, $2, $3);`, [name, human, hobby]
  );

  console.log(res);
}
