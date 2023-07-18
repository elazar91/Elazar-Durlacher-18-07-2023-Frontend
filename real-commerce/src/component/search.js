import { useState } from "react";
import CityCard from "./cityCard";

const Search = ({ weatherData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // Filter the weatherData array based on the search term
    const results = weatherData.filter((item) =>
      item.City.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Weather Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.length === 0 && <p>No results found.</p>}
      <ul>
        {searchResults.map((item) => (
          <CityCard item={item} key={item.City} />
        ))}
      </ul>
    </div>
  );
};

export default Search;
