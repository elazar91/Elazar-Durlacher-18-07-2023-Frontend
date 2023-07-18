import CityCard from "../CityCard/CityCard";
import style from "./Search.module.scss";

const Search = ({ weatherData, term, results }) => {
  const handleSearch = (e) => {
    e.preventDefault();

    const weatherResults = weatherData.filter((item) =>
      item.City.toLowerCase().includes(term.searchTerm.toLowerCase())
    );

    results.setSearchResults(weatherResults);
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

      {results.searchResults.length === 0 && <p>No results found.</p>}
      <ul>
        {results.searchResults.map((item) => (
          <CityCard item={item} key={item.City} />
        ))}
      </ul>
    </div>
  );
};

export default Search;
