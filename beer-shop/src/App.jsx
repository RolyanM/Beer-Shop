
import React, { useState, useEffect } from "react";
import "./App.module.scss";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {

  const [beers, setBeers] = useState([]);




    // Fetch the beers from PUNK API
    const fetchBeers = () => {
      fetch("https://api.punkapi.com/v2/beers")
        // Put response into response.json file
        .then((response) => response.json())
        // Add beers received in API fetch to beers object array of setBeers
        .then((data) => setBeers(data))
        // Catch errors
        .catch((error) => console.log(error));
    };
  
    // On page load, fetch the beers
    useEffect(() => {
      fetchBeers();
    }, []);

  return (
   <>
      <NavBar />
      <Main beers={beers}  />
   </>
  );
}

export default App;
