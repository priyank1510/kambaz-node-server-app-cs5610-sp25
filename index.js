import "dotenv/config";
import express from 'express';
import  Hello from './Hello.js'; 
import Lab5 from './Lab5/index.js'; 
import cors from "cors";
import session from "express-session";
import SessionController from "./Lab5/SessionController.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";

import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import mongoose from "mongoose";
import AssignmentRoutes from "./Kambaz/Courses/Assignments/routes.js";

const CONNECTION_STRING =
          "mongodb://127.0.0.1:27017/kambaz-cs5610-sp25";
mongoose.connect(CONNECTION_STRING);
const app = express();

app.use(cors({credentials: true,
    origin: process.env.NETLIFY_URL ||  "http://localhost:5173",})); 

    
const sessionOptions = {secret: process.env.SESSION_SECRET||"kambaz", resave: false
    , saveUninitialized: false};

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
Hello(app);   
Lab5(app);
SessionController(app);
ModuleRoutes(app);
UserRoutes(app);
CourseRoutes(app);
EnrollmentRoutes(app);
AssignmentRoutes(app);
app.listen( process.env.PORT || 4000); 