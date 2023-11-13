import Router from "express";
import { GetAddressSuggestions, GetZipCode } from "../controllers/index.controllers.js";

const router = Router();

//CREATE ROUTES
router.post("/getAddressByName", GetAddressSuggestions);
router.post("/getZipCodeByPlaceId", GetZipCode);

//EXPORT LIBRARIES 
export default router;