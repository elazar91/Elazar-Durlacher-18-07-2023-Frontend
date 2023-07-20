import React, { useState } from "react";
import style from "./Search.module.scss";

const Search = ({ term, results }) => {
  const [loading, setLoading] = useState(false);
  const apiKey = "xZqCPMp7LLmhlDOo64APl3GFPVP29iJ4";

  const handleSearch = async (e) => {
    e.preventDefault();

    const query = term.searchTerm;

    if (query) {
      try {
        setLoading(true);
        const response = await fetch(
          `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from the AccuWeather API");
        }

        const data = await response.json();
        setLoading(false);
        results.setSearchResults(data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    } else {
      results.setSearchResults([]);
    }
  };

  const handleChange = (e) => {
    term.setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className={style.search}>
        <h1>Weather Search</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a city..."
            value={term.searchTerm}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {loading && <p>Loading...</p>}
      {!loading && results.searchResults.length === 0 && (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Search;
