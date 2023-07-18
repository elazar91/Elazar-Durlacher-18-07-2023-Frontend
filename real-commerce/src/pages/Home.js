import React from "react";

export default function Home() {
  return (
    <div>
      <div className={styles.description}>
        <Search
          weatherData={weatherData}
          term={{ searchTerm, setSearchTerm }}
          results={{ searchResults, setSearchResults }}
        />
      </div>
    </div>
  );
}
