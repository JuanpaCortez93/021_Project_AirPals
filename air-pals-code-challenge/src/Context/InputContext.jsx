import { createContext, useEffect, useState } from "react"
import axios from 'axios';

export const InputContext = createContext();
export const InputContextProvider = (props) => {

    //USE STATE MODAL INITIALIZATION
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    //USE STATE INITIALIZATION
    const [addressTextInput, setAddressTextInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [addressZipCode, setAddressZipCode] = useState(false);

    //USE EFFECT INITIALIZATION
    useEffect(() => {
        const fetchSuggestions = async () => {
          try {
            const addressUrl = `http://localhost:3000/getAddressByName`;
            const response = await axios.post(addressUrl, {addressTextInput});
            console.log(response.data.slice(0, 3))
            setSuggestions(response.data.slice(0, 3));
          } catch (error) {
            setSuggestions({description: 'Something went wrong...'});
          }
    };

    //INPUT'S TEXT CONDITION
    if (addressTextInput.length > 0) {
        fetchSuggestions();
      } else {
        setSuggestions([]);
      }
    }, [addressTextInput]);

    //INPUT'S ON CHANGE ACTION-FUNCTION
    const handleInputChange = (e) => {
        setAddressTextInput(e.target.value);
    };

    //CHECK IF ADDRESS IS PART OF THE ZIP CODES
    const handleSuggestionClick = async (placeIdAddress) => {
      try{
        const addressUrl = `http://localhost:3000/getZipCodeByPlaceId`;
        const response = await axios.post(addressUrl, {placeIdAddress});

        if(response.data.isZipCode){
          openModal();
          setAddressZipCode(true);
        }else{
          openModal();
          setAddressZipCode(false);
        }

      } catch (error) {
        setSuggestions({description: 'Something went wrong...'});
      }
    };

    return (
        <InputContext.Provider value={{addressZipCode, isModalOpen, closeModal, addressTextInput, suggestions, handleInputChange, handleSuggestionClick}}>
            {props.children}
        </InputContext.Provider>
    )
}