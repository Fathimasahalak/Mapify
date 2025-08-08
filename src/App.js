import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  DistanceForm  from './components/distanceForm';
import LocationSearch from './components/LocationSearch';
import DistanceResult from "./components/DistanceResult";
import About from "./components/About";
import './App.css';
import axios from 'axios';


function App() {
  // Use state to store the source and destination values
  const [source, setSource] = useState(null); // { label, coords }
  const [destination, setDestination] = useState(null); // { label, coords }

  useEffect(() => {
  if (source && destination) {
    localStorage.setItem('from', JSON.stringify(source));
    localStorage.setItem('to', JSON.stringify(destination));
  }
}, [source, destination]);


return (

        <Router>
            <Routes>
                <Route path="/" element={<DistanceForm source={source} destination={destination} />} />
                <Route path="/search" element={<LocationSearch setSource={setSource} setDestination={setDestination} />} />
                <Route path="/distance-result" element={<DistanceResult />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );}

export default App;