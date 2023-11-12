//IMPORT LIBRARIES
import express from "express";
import cors from "cors";

//IMPORT ROUTES
import router from "./routes/index.routing.js";

//INITIALIZATE EXPRESS
const app = express();
const API_KEY = "AIzaSyC7V4A5k_CUlnlZS9u5EN6TC3mm1JLZQE0";

//PIPELINE - MIDDLEWARES (CORS, JSON)
app.options("*", cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }));
app.use(cors({ origin: "http://localhost:5173", optionsSuccessStatus: 200 }));
app.use(express.json());

//IMPORT/USE ROUTERS
app.use(router)

//EXPORT APP
export default app;