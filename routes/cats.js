// Import express to use Router to create a new Router object
import express from "express";
// Import all the functions from cats models
import * as catsModels from "../models/cats.js";
// Create a new Router object to fefine the handle request going to the path /cats
const router = new express.Router();


// Handle request to retieve all the cats when the path match, in this case is /cats"/"
router.get("/", (req, res) => {
  // Check if query object is empty or not
  if(Object.keys(req.query).length !== 0) {
    // If there is a query is not empty and there is query request with name
    if(req.query.name) {
      // Get name request from req.query and make it lowercase
      const name = req.query.name.toLowerCase();
      // Get the cat by the name using funtion getCatByName from methods
      const cat = catsModels.getCatByName(name);
      // Return the response
      res.json({
        succes: true,
        message: `Here is the cat with name '${cat.name}'`,
        payload: cat
      });
     // If query Object is not empty but the query is different like name 
    }else{
      // Return response
      res.json({
        succes: true,
        message: `There is not cat matching your query`,
      });
    }
  // If there is not any query request, it will return all the cats
  }else {
  
    // Use the function getAllCats from models functions file
    let cats = catsModels.getAllCats();
    // Return the response
    res.json({
      succes: true,
      message: "Here all the cats",
      payload: cats
    });
  }
  
});

// Handle request to retrieve a cat by ID
router.get("/:id", (req, res) => {
  // Get Id from request.params and convert it to a number
  const id = Number(req.params.id);
  // Get the cat using the getCatById function from catsmodels functions
  const cat = catsModels.getCatById(id);
  // Return the response
  res.json({
    succes: true,
    message: `Here is the cat with id ${id}`,
    payload: cat
  });
})


// export router Object to use it in app.js
export default router;