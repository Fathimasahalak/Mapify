import React from "react";
import "./DistanceForm.css";
import { FaMapMarkerAlt } from "react-icons/fa";
//import { useNavigate } from 'react-router-dom';
 import { useNavigate, useSearchParams } from "react-router-dom";
import bg from "../assets/images/download (1).png";

const DistanceForm = ({ source, setSource, destination, setDestination }) => {
    const navigate = useNavigate();

    const handleSourceFocus = () => {
        navigate('/search?field=from');
    };

    const handleDestinationFocus = () => {
        navigate('/search?field=to');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!source || !destination) {
            alert("Please select both locations.");
            return;
        }

        
       
   navigate('/distance-result', {
            state: {
                from: source,
                to: destination,
            },
        });


    };

    return (
        <div className="page-container">
        <div className="hero-text"><p>Good Morning!<br />Where are you going?</p></div>
        <div className="form-wrapper" style={{ backgroundImage: `url(${bg})` }}>

        

            <form onSubmit={handleSubmit} className="location-form">
                <div className="input-group">
                    
                    <div className="input-area">
                        <label htmlFor="from"><FaMapMarkerAlt className="location-icon" />From</label>
                        <input
                            type="text"
                            id="from"
                            placeholder="Enter Starting Location"
                            value={source?.label || ""}
                            onFocus={handleSourceFocus}
                            readOnly // Prevent direct typing here
                            required
                        />
                    </div>
                </div>

                <div className="input-group">
                    
                    <div className="input-area">
                        <label htmlFor="to"><FaMapMarkerAlt className="location-icon" />To</label>
                        <input
                            type="text"
                            id="to"
                            placeholder="Enter Ending Location"
                            value={destination?.label || ""}
                            onFocus={handleDestinationFocus}
                            readOnly // Prevent direct typing here
                            required
                        />
                    </div>
                </div>

                <button type="submit">Find the Directions!</button>
            </form>
        </div> </div>
    );
};

export default DistanceForm;