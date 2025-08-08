import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./DistanceResult.css";

const DistanceResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState('');
const [funnyMessage, setFunnyMessage] = useState('');
  const [offensiveMessage, setOffensiveMessage] = useState('');


  
  const from = location.state?.from;
  const to = location.state?.to;



  const messages = {
    low: [
      "Distance is too short, you can find it by yourself! 🚶‍♂",
      "Come on, it's practically next door! Use your eyes! 👀",
      "This distance is so short, even a coconut could roll there! 🥥",
      "Seriously? You need GPS for that? Just ask any autorickshaw! 🛺",
      "My Kerala map is too sophisticated for such tiny distances! 🗺"
    ],
    medium: [
      "Ask a trusted adult for directions! 👨‍👩‍👧‍👦",
      "Better call your ammachi, she knows every road in Kerala! 📞",
      "Have you tried asking someone at the nearest tea shop? ☕",
      "Consult your local bus conductor - they're the real experts! 🚌",
      "Find an uncle who's been driving in Kerala for 30 years! 👨‍🦳"
    ],
    high: [
      "The distance is too long for you to think about! 🤯",
      "That's so far, even the backwaters got tired thinking about it! 🛶",
      "Distance too overwhelming for human comprehension! 🌴",
      "My circuits are overheating from this Kerala-sized distance! 🔥",
      "Error 404: Distance not found (because it spans multiple monsoons)! ❌"
    ]
  };
  const offensivePathComments = [
    "There's this path, now go burn some calories! 🔥",
    "Here's your route - time to test those leg muscles! 💪",
    "Follow this path and maybe you'll finally get some exercise! 🚶‍♂",
    "This route exists, now stop being lazy and start walking! 👟",
    "Here's the way - hope you packed some energy drinks! ⚡",
    "Path located! Now go make your ancestors proud by actually moving! 🏃‍♀",
    "Route found - time to discover what your feet are actually for! 👣",
    "This is the way - may your blisters be legendary! 🩹",
    "Here's your path, now go sweat like you mean it! 💦",
    "Route discovered - prepare to finally use those gym membership fees! 🏋‍♂",
    "Follow this trail and maybe burn off last week's biriyani! 🍛",
    "Path ready - time to walk off those coconut laddus! 🥥",
    "Here's the route - go make your fitbit actually useful! ⌚",
    "This way leads to your destination and hopefully some self-respect! 🎯"
  ];
  useEffect(() => {
    if (!from || !to) {
      setError('Missing source or destination.');
      return;
    }

    const fetchDistance = async () => {
      try {
        const response = await axios.post(
          'https://api.openrouteservice.org/v2/directions/driving-car',
          {
            coordinates: [
              from.coords, // [lon, lat]
              to.coords
            ]
          },
          {
            headers: {
              Authorization: 'eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjkwM2ViNGUxZTI1NzQ0NDU4MzBjYThjOTYyMzY2NDlhIiwiaCI6Im11cm11cjY0In0=', // 🔑 Replace with your actual key
              'Content-Type': 'application/json'
            }
          }
        );

        const distanceInMeters = response.data.routes[0].summary.distance;
        const distanceInKm = distanceInMeters / 1000;
        setDistance(distanceInKm);

        let category = '';
        if (distanceInKm < 50) {
          category = 'low';
        } else if (distanceInKm >= 50 && distanceInKm < 200) {
          category = 'medium';
        } else {
          category = 'high';
        }
        const randomFunny = messages[category][Math.floor(Math.random() * messages[category].length)];
        const randomOffensive = offensivePathComments[Math.floor(Math.random() * offensivePathComments.length)];
        setFunnyMessage(randomFunny);
        setOffensiveMessage(randomOffensive);
      } catch (err) {
        console.error('Error calculating distance:', err.response?.data || err.message);
        setError('Something went wrong while calculating distance.');
      }
    };

    fetchDistance();
  }, [from, to]);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="result-container">
      <h2>HI,</h2>
      {error && <p className="error">{error}</p>}
      {distance && (
        <div className="result">
            <p className='OUTPUT'><strong></strong> {funnyMessage}</p>
          <p><strong></strong> {offensiveMessage}</p>
          <p><strong>From</strong></p><p>{from.label}</p>
          <p><strong>To</strong></p><p>{to.label}</p>
          <p><strong>Distance</strong> {distance.toFixed(2)} km</p>
          
        </div>
      )}
      <button onClick={handleBack}>Try Another :)</button>
    </div>
  );
};

export default DistanceResult;
