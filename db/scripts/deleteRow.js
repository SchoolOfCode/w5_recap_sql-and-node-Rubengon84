// Import query function from index.js
import query from "../index.js"

// Delete a row by a given Id
function deleteCat(id) {
   // Call the function query to send a sql query to Delete a row in the cloud data-base by Id 
  let res = query(
    `DELETE FROM cats
     WHERE cats.id = $1;`, [id]
  );
  console.log(res);
}
