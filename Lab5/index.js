import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithArrays from "./WorkingWithArrays.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import SessionController from "./SessionController.js";
export default function Lab5(app){
  
    app.get("/lab5/welcome", (req, res) => {
      res.send("Welcome to lab 5");
    });
  
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  WorkingWithArrays(app); 
  SessionController(app);
}