
import React, { useState, useEffect } from "react";
import "./App.module.scss";

import NavBar from "./components/NavBar";
import Main from "./components/Main";

const App = () => {
  // beers list from API 
  const [beers, setBeers] = useState([]);

  // SearchTerm will be used to filter list of beers by term
  const [searchTerm, setSearchTerm] = useState("");

  //  filters not working
  const [filters, setFilters] = useState([
    { value: "abv", label: "High ABV (> 6.0%)", isChecked: false },
    { value: "classic", label: "Classic Range", isChecked: false },
    { value: "acidic", label: "Acidic (< 4)", isChecked: false },
  ]);

  // Search box to search on input
  const handleChange = (e) => setSearchTerm(e.target.value);

  //  set the filters being applied
  const handleChecked = (filter, isChecked) => {
    const filtersCopy = Object.assign([], filters);
    const index = filters.findIndex((f) => f.value === filter.value);
    filtersCopy[index].isChecked = isChecked;
    setFilters(filtersCopy);
  };

  // Fetch the beers from PUNK API
  const fetchBeers = () => {
    fetch("https://api.punkapi.com/v2/beers")
      // Put response into response.json file
      .then((response) => response.json())
      // Add beers to setBeers
      .then((data) => setBeers(data))
      // error thing
      .catch((error) => alert("Error"));
  };

  // On page load, fetch the beers
  useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <>
      
      <NavBar
              filters={filters}
              handleChange={handleChange}
              handleChecked={handleChecked}
      />
      <Main beers={beers} searchTerm={searchTerm} filters={filters} />
    </>
  );
};

export default App;