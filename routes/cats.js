// Import express to use Router to create a new Router object
import express from "express";
// Import all the functions from cats models
import * as catsModels from "../models/cats.js";
// Create a new Router object to fefine the handle request going to the path /cats
const router = new express.Router();


// Handle request to retieve all the cats when the path match, in this case is /cats"/"
router.get("/", async (req, res) => {
  // Check if query object is empty or not
  if(Object.keys(req.query).length !== 0) {
    // If there is a query is not empty and there is query request with name
    if(req.query.name) {
      // Get name request from req.query and make it lowercase
      const name = req.query.name;
      // Get the cat by the name using funtion getCatByName from methods
      const cat = await catsModels.getCatByName(name);
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
    let cats = await catsModels.getAllCats();
    // Return the response
    res.json({
      succes: true,
      message: "Here all the cats",
      payload: cats
    });
  }
  
});

// Handle request to retrieve a cat by ID
router.get("/:id", async (req, res) => {
  // Get Id from request.params and convert it to a number
  const id = Number(req.params.id);
  // Get the cat using the getCatById function from catsmodels functions
  const cat = await catsModels.getCatById(id);
  // Return the response
  res.json({
    succes: true,
    message: `Here is the cat with id ${id}`,
    payload: cat
  });
})

// Handle request to create a cat in the cats table
router.post("/", async (req, res) => {
  // Declare cat and passed the information from the request body
  let cat = req.body;
  // Create cat using createCat function passing the information that user get from request body
  let catCreated = await catsModels.createCat(cat);
  res.json({
    succes: true,
    message: `Cat created`,
    payload: catCreated
  });

})


// Handle request to update a cat with the given Id
router.put("/:id", async(req, res) => {
  // Get the Id from req.params and convert it in to a number
  const id = Number(req.params.id); 
  // Declare cat and passed the information from the request body 
  let cat = req.body;
  // Updating a cat using updateCar function passing the information that user get from request body and Id
  let catUpdated = await catsModels.updateCat(id,cat);
  res.json({
    succes: true,
    message: `Cat updated with ID ${id}`,
    payload: catUpdated
  });
} )

// Handle request to delete a cat with the given Id
router.delete("/:id", async (req, res) => {
  // Get the Id from req.params and convert it in to a number
  const id = Number(req.params.id);
  // Delete a cat using the deleteCat funtion with the given ID
  const catDeleted = await catsModels.deleteCat(id);
  res.json({
    succes: true,
    message: `Cat deleted with id ${id}`,
    payload: catDeleted
  });
})


// export router Object to use it in app.js
export default router;