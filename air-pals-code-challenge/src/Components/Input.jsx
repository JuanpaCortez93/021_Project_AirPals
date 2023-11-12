//IMPORT LIBRARIES
import { useState, useEffect } from "react";
import axios from 'axios';

const Input = () => {

    //USE STATE INITIALIZATION
    const [addressTextInput, setAddressTextInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    //USE EFFECT INITIALIZATION
    useEffect(() => {
        const fetchSuggestions = async () => {
          try {
            const addressUrl = `http://localhost:3000/getAddressByName`;
            const response = await axios.post(addressUrl, {addressTextInput});
            console.log(response.data);
            setSuggestions(response.data);
          } catch (error) {
            console.error('Error fetching suggestions:', error);
          }
    };

    if (addressTextInput.trim() !== '') {
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
        const addressUrl = `http://localhost:3000/getZipCodeByPlaceId`;
        const response = await axios.post(addressUrl, {placeIdAddress});
        console.log(response.data)
    };

    return (
        <>
            <div>
                <input type="text" role="text" value={addressTextInput} placeholder="Enter an address here..." onChange={handleInputChange}></input>
                
                <ul>
                    {suggestions.map((suggestion) => (
                    <li key={suggestion.place_id} onClick={() => handleSuggestionClick(suggestion.place_id)}>
                        {suggestion.description} - {suggestion.place_id}
                    </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Input;



// import React, { useState } from 'react';

// const AddressAutocomplete = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);



//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Ingrese una dirección"
//       />
//       {/* Lista de sugerencias aquí */}
//     </div>
//   );
// };

// export default AddressAutocomplete;