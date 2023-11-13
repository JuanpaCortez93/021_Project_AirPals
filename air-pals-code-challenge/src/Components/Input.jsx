//IMPORT LIBRARIES
import { useContext } from "react";
import Modal from "./Modal.jsx"

import { InputContext } from "../Context/InputContext";
import { FaMapMarkerAlt, FaMapMarker } from "react-icons/fa"

const Input = () => {
    
    const {addressTextInput, suggestions, handleInputChange, handleSuggestionClick} = useContext(InputContext);

    return (
        <>
            <div className="max-w-screen-md">
                <div className="flex justify-center items-center">
                    <div className="bg-white p-4">
                        <FaMapMarkerAlt className="w-9 h-9"></FaMapMarkerAlt>
                    </div>
                    <input type="text" role="text" value={addressTextInput} placeholder="Enter an address here..." onChange={handleInputChange} 
                    className="w-full px-2 py-5 border-gray-300 text-xl text-start font-semibold focus:outline-none focus:border-blue-500"></input>
                </div>
                
                <ul className="bg-white">
                        {suggestions.map((suggestion) => (
                        <li key={suggestion.place_id} className="flex justify-start items-center py-3 text-start list-none cursor-default" onClick={() => handleSuggestionClick(suggestion.place_id)}>
                            <div>
                                <FaMapMarker className="w-6 h-6 mx-5"></FaMapMarker>
                            </div>
                            <div>
                                <p>{suggestion.description}</p>
                                <p>{suggestion.structured_formatting.secondary_text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <Modal />
        </>
    )
}

export default Input;