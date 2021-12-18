// Import express to use Router to create a new Router object
import express from "express";
// Import all the functions from cats models
import * as catsModels from "../models/cats.js";
// Create a new Router object to fefine the handle request going to the path /cats
const router = new express.Router();
// Handle request to retieve all the cats when the path match, in this case is /cats"/"
router.get("/", (req, res) => {
  // Use the function getAllCats from models functions file
  let cats = catsModels.getAllCats();
  // Return the response
  res.json({
    succes: true,
    message: "Here all the cats",
    payload: cats
  });
});

// export router Object to use it in app.js
export default router;