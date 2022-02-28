// Import Postgres package from npm pg-package
import pg from "pg";
// Import the envairoment variables from config.js
import * as config from "../config.js";
// Create a pool object from pg.Pool to manage the conections between the requests and the data-base in the cloud
const pool = new pg.Pool(
  { // Credentials 
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port,
  ssl: { rejectUnauthorized: false}
}
);
// Create function query to manage SQL querys
function query(text, params) {
    return pool.query(text, params )
}
// Export query function
export default query;