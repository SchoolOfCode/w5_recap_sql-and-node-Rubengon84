import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
// Import Router objects with the handle request methods
import router from "./routes/cats.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Tell to app the path where we are going to use our router module difined.
app.use("/api/cats", router);   // change the path here to mask the path for the url variable in main.js of task 3 

app.use(express.static(path.join(__dirname, "public")));

/** DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res, next) {
  res.render("index", { title: "Books" });
});
// exports cats to use the object in the models functions
export const cats = [
  {
    id: 1,
    name: "Tony",
    human: "Liz.K",
    hobby: "cling",
  },
  {
    id: 2,
    name: "Poppy",
    human: "Tim",
    hobby: "screm",
  },
  {
    id: 3,
    name: "Narla",
    human: "Mell",
    hobby: "obstruct",
  },
];

/* Your tasks for part 1: 🔻 
- 👉 Add request handlers for your API that will handle requests to the path "/cats" for all the 
cats, providing the data in the cats array in this file. Test this in your browser. (Completed) 
- 👉 Add code to also handle requests for a cat by id using params and cats by name using a query. 
Test this in your browser. (Completed)
- 👉 Go to main.js in the public/js folder, and write the code needed to hook up the button with id 
"get-cats" to show the data on the front end. (Completed)
*/

export default app;
