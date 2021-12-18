// Import query function from index.js
import query from "../index.js";

// Sql code to retrieve all the data from cats table
const sqlStr = `CREATE TABLE IF NOT EXISTS cats (id SERIAL PRIMARY KEY, name TEXT, human TEXT, hobby TEXT);`;

// Async function to make a Sql query to create a table with sql string declared before
async function createCatsTable() {
  const res = await query(sqlStr);
  console.log(res);
}
// Call createCatsTable function
createCatsTable();