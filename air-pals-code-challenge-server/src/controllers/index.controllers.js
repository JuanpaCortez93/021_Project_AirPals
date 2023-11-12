import instance from "./api-instance.js";
const API_KEY = "AIzaSyC7V4A5k_CUlnlZS9u5EN6TC3mm1JLZQE0";

export const GetAddress = async (req, res) => {

    const {addressTextInput} = req.body;
    const addressResponse = await instance.get(`/json?input=${addressTextInput}&key=${API_KEY}`, {});
    res.send(addressResponse.data.predictions);
    
}

export const GetZipCode = async (req, res) => {

    const {placeIdAddress} = req.body;
    const urlPath = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeIdAddress}&key=${API_KEY}`
    const idAddressResponse = await instance.get(urlPath);

    if (idAddressResponse.data && idAddressResponse.data.result && idAddressResponse.data.result.address_components){
        const addressComponents = idAddressResponse.data.result.address_components;

        // Encontrar el componente que contiene el código postal
        const zipcodeComponent = addressComponents.find((component) => component.types.includes('postal_code'));

        // Obtener el código postal
        const zipcode = zipcodeComponent ? zipcodeComponent.short_name : '';

        console.log(zipcode);
    }

    res.send(idAddressResponse.data);
    
    
}