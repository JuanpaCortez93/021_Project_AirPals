//IMPORT AXIOS
import axios from "axios";

//INITIALIZATE AXIOS INSTANCE
const instance = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/place/',
    timeout: 1000,
    secure: false
});

export default instance;