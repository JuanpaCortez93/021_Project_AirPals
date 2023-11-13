//IMPORT DB CONNECTION POOL AND AXIOS INSTANCE
import connection from "../database/dbConnection.js";
import instance from "./api-instance.js";

//IMPORT VENV VARIABLES
import { GOOGLE_MAPS_API } from "../config.js";

//GET ADDRESS SUGGESTIONS - COMMING FROM LINE 17 Input.jsx
export const GetAddressSuggestions = async (req, res) => {

    try{
        const {addressTextInput} = req.body;
        const addressResponse = await instance.get(`/autocomplete/json?input=${addressTextInput}&key=${GOOGLE_MAPS_API}`);
        res.status(200).send(addressResponse.data.predictions);
    }catch(error){
        res.status(500).send([]);
    }

}

//GET ADDRESS SUGGESTIONS - COMMING FROM LINE 38 Input.jsx
export const GetZipCode = async (req, res) => {

    try{
        const {placeIdAddress} = req.body;
        const urlPath = `/details/json?place_id=${placeIdAddress}&key=${GOOGLE_MAPS_API}`
        const idAddressResponse = await instance.get(urlPath);

        if (idAddressResponse.data && idAddressResponse.data.result && idAddressResponse.data.result.address_components){
            const addressComponents = idAddressResponse.data.result.address_components;
            const zipcodeComponent = addressComponents.find((component) => component.types.includes('postal_code'));
            const zipcode = zipcodeComponent ? zipcodeComponent.short_name : 0;
            let isZipCode = false;

            if(zipcode !== 0){
                
                const [rows] = await connection.query('SELECT * FROM ZipCodes WHERE zipcode = ?', [zipcode]);

                if(rows.length > 0) {
                    isZipCode = true;
                }
            
            }

            res.status(200).send({isZipCode});
        }

    }catch(error){

        res.status(500).send({isZipCode: false});

    }   
    
}