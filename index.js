import "dotenv/config";
import express from 'express';
import  Hello from './Hello.js'; 
import Lab5 from './Lab5/index.js'; 
import cors from "cors";
import session from "express-session";
import SessionController from "./Lab5/SessionController.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";

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
UserRoutes(app);
CourseRoutes(app);
app.listen( process.env.PORT || 4000); 