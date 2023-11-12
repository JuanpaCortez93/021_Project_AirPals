import Router from "express";
import { GetAddress, GetZipCode } from "../controllers/index.controllers.js";

const router = Router();
const API_KEY = "AIzaSyC7V4A5k_CUlnlZS9u5EN6TC3mm1JLZQE0";

//CREATE ROUTES
router.post("/getAddressByName", GetAddress);
router.post("/getZipCodeByPlaceId", GetZipCode);

//EXPORT LIBRARIES 
export default router;