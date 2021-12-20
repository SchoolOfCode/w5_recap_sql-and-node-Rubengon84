// Import query function from index.js
import query from "../index.js";

// Update row by a given Id and the information to update
function updateCat(id,cat) {
  // Declare the variables to update and asign to the information passed from cat
  const name = cat.name;
  const human = cat.human;
  const hobby = cat.hobby;
  // Call the function query to send a sql query to update the id row in the cloud data-base by the variables declared before 
  let res= query(
    `UPDATE cats
     SET name = $1, human = $2, hobby = $3
     WHERE cats.id = $4;`, [name, human, hobby, id]
  );
  console.log(res);
}