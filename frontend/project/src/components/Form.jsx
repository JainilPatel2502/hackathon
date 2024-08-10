import React, { useState } from 'react';
import photo from '../assets/backimg.jpg';
import axios from 'axios';

const FarmerForm = () => {
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formState, setFormState] = useState({
        nitrogenContent: 0,
        phosphorousContent: 0,
        potassiumContent: 0,
        ph: 0,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevFormState) => ({ ...prevFormState, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!navigator.geolocation) {
            setError('Geolocation is not supported by this browser.');
            return;
        }

        try {
            // Get user's current geolocation
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            const { latitude, longitude } = position.coords;

            // Include the latitude and longitude in the form data
            const formData = {
                ...formState,
                lat: latitude,
                long: longitude,
            };

            // Send the combined data to the backend using axios
            const response = await axios.post('/api/weather', formData);

            if (response.status === 200) {
                const { result } = response.data;
                console.log('Form data successfully submitted:', result);
                setResult(result);
                setIsSubmitted(true); // Set the form as submitted
            } else {
                console.error('Error submitting form data');
            }
        } catch (error) {
            if (error.code === 'ERR_NETWORK') {
                setError('Network error.');
            } else if (error.response && error.response.status === 403) {
                setError('Location access denied.');
            } else {
                console.error('Error:', error);
                setError('Failed to fetch location data.');
            }
        }
    };

    return (
        <div className="relative min-h-screen">
            <img
                src={photo}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="relative flex justify-center items-center min-h-screen bg-black bg-opacity-10">
                <div className="max-w-2xl p-6 bg-white/20 rounded-xl shadow border border-black my-5 w-96">
                    {isSubmitted ? (
                        <div>
                        <h2 className="text-lg font-bold mb-4 text-center text-black">Submission Result</h2>
                        <div className="text-center text-black">
                            {Array.isArray(result) ? (
                                result.map((item, index) => (
                                    <p key={index} className="mb-2">
                                        {`${index + 1}. ${item}`}
                                    </p>
                                ))
                            ) : (
                                <p>{result}</p> // If result is not an array, display it as a single item
                            )}
                        </div>
                    </div>
                    
                    
                    ) : (
                        <>
                            <h2 className="text-lg font-bold mb-4 text-center text-black">Farm Details</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-4 mb-4">
                                    <div>
                                        <label className="block text-black text-md font-medium mb-2" htmlFor="ph">
                                            pH of Soil
                                        </label>
                                        <input
                                            className="input input-bordered input-accent  max-w-xs flex-1 text-whiteblock w-full p-2 border bg-white text-black border-gray-300 rounded"
                                            type="text"
                                            id="ph"
                                            name="ph"
                                            value={formState.ph}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-black text-md font-medium mb-2" htmlFor="nitrogenContent">
                                            Nitrogen Content (kg/ha)
                                        </label>
                                        <input
                                            className="input input-bordered input-accent  max-w-xs flex-1 text-whiteblock w-full p-2 border bg-white text-black border-gray-300 rounded"
                                            type="text"
                                            id="nitrogenContent"
                                            name="nitrogenContent"
                                            value={formState.nitrogenContent}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-md text-black font-medium mb-2" htmlFor="phosphorousContent">
                                            Phosphorous Content (kg/ha)
                                        </label>
                                        <input
                                            className="input input-bordered input-accent  max-w-xs flex-1 text-whiteblock w-full p-2 border bg-white text-black border-gray-300 rounded"
                                            type="text"
                                            id="phosphorousContent"
                                            name="phosphorousContent"
                                            value={formState.phosphorousContent}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-md text-black font-medium mb-2" htmlFor="potassiumContent">
                                            Potassium Content (kg/ha)
                                        </label>
                                        <input
                                            className="input input-bordered input-accent  max-w-xs flex-1 text-whiteblock w-full p-2 border bg-white text-black border-gray-300 rounded"
                                            type="text"
                                            id="potassiumContent"
                                            name="potassiumContent"
                                            value={formState.potassiumContent}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <button
    className="font-bold rounded-lg ml-28 shadow-lg py-2 px-4 mt-1 text-black btn btn-outline btn-warning bg-white-400 hover:bg-yellow-500"
    type="submit"
>
    Submit
</button>

                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FarmerForm;
