//IMPORT LIBRARIES
import { config } from "dotenv";

//STARTING CONFIG
config();

//DECLARE VENV VARIABLES
//PORT
export const PORT = process.env.PORT || 3000;

//DATABASE
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'toor';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_NAME = process.env.DB_NAME || 'zipcodedb';

//GOOGLE MAPS API
export const GOOGLE_MAPS_API = process.env.GOOGLE_MAPS_API || '';