import React, { useState, useEffect, useRef } from "react";
//import { useSearchParams, useNavigate } from 'react-router-dom';
 // You can create a CSS file for styling this page
import { useNavigate, useSearchParams } from "react-router-dom";
import "./LocationSearch.css";

const LocationSearch = ({ setSource, setDestination }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const timeoutRef = useRef(null);

    const [searchParams] = useSearchParams();
    const field = searchParams.get('field'); // 'from' or 'to'
    const navigate = useNavigate();

    // Replace with your actual OpenRouteService API key
    const API_KEY = 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjkwM2ViNGUxZTI1NzQ0NDU4MzBjYThjOTYyMzY2NDlhIiwiaCI6Im11cm11cjY0In0=';

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        if (searchTerm.length < 3) {
            setSuggestions([]);
            return;
        }

        timeoutRef.current = setTimeout(() => {
            setIsLoading(true);
            fetch(`https://api.openrouteservice.org/geocode/autocomplete?api_key=${API_KEY}&text=${searchTerm}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    setSuggestions(data.features);
                })
                .catch(error => {
                    console.error('Error fetching suggestions:', error);
                    setSuggestions([]);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }, 400);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [searchTerm, API_KEY]);

    const handleSuggestionClick = (suggestion) => {

        const coords = suggestion.geometry.coordinates; // [lon, lat]
    const label = suggestion.properties.label;
        // Update the state in App.js directly
        if (field === 'from') {
            setSource({ label, coords });
        } else if (field === 'to') {
            setDestination({ label, coords });
        }
        // Navigate back to the home page
        navigate('/');
    };

    return (
        <div className="search-page-container">
            
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Start typing a location..."
                className="search-input-full-page"
            />




{/* Show quote only when input is empty */}
        {searchTerm.length === 0 && (
            <div className="travel-quote">
                <p>"Not all those who wander are los<br />– Saint Augustine"</p>
            </div>
        )}


            {isLoading && <div className="loading-indicator">Loading...</div>}
            {suggestions.length > 0 && (
                <ul className="suggestions-list-full-page">
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.properties.id}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="suggestion-item"
                        >
                            {suggestion.properties.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default LocationSearch;
