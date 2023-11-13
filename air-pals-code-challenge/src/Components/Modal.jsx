// IMPORT CONTEXT LIBRARY
import { useContext } from 'react';
import { InputContext } from '../Context/InputContext';
import { FaTimesCircle } from 'react-icons/fa'

const Modal = () => {

    //USE CONTEXT VARIABLES
    const {addressZipCode, isModalOpen, closeModal} = useContext(InputContext);
    const mainHeaderClassStyles = "my-6 text-4xl font-bold";
    const secondaryHeaderClassStyles = "my-8 text-2xl font-bold";
    const paraghrapHeaderClassStyles = "my-5 text-xl font-medium";

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-11/12 bg-white p-12 relative">
                <button onClick={closeModal} className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700">
                    <FaTimesCircle className='w-6 h-6 mr-4 mt-4'></FaTimesCircle>
                </button>

                { addressZipCode ? <h2 className={mainHeaderClassStyles}>Address Updated</h2> : 
                <h2 className={mainHeaderClassStyles}>Out Of Delivery Area</h2> }

                { addressZipCode ? <h3 className={secondaryHeaderClassStyles}>New address added to your account</h3> : 
                <h3 className={secondaryHeaderClassStyles}>"Wherever I go, there I am"</h3> }

                { addressZipCode ? <p className={paraghrapHeaderClassStyles}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore commodi id. Cum reiciendis quae accusamus et autem eius illum modi consequuntur assumenda hic, aliquid obcaecati magnam praesentium incidunt earum.</p> : 
                <p className={paraghrapHeaderClassStyles}>Sadly, this quote is not true for us. In other words, we are not operating in your area (yet), but things change everyday.</p> }

                { addressZipCode ? <p className={paraghrapHeaderClassStyles + " mb-20"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> : 
                <p className={paraghrapHeaderClassStyles + " mb-24"}>Sing up to our newsletter to get notified.</p> }

                    
                <button onClick={closeModal} className="px-28 py-5 bg-red-300 text-xl font-semibold text-white rounded-full">
                UNDERSTOOD
                </button>
            </div>
        </div>
    );
};

export default Modal;
