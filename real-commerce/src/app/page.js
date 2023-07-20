"use client";
import style from "./page.module.scss";
import Search from "../component/search/Search";
import CityCard from "../component/CityCard/CityCard";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [page, setPage] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const apiKey = "xZqCPMp7LLmhlDOo64APl3GFPVP29iJ4";

  async function getCurrentConditions(location, apiKey) {
    try {
      const response = await fetch(
        `http://dataservice.accuweather.com/currentconditions/v1/${location.Key}?apikey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data from the AccuWeather API");
      }

      const data = await response.json();
      location.data = data;
      setSelectedCity(location);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return (
    <main className={style.main}>
      <div className={style.nav}>
        <div className={page ? style.page : ""} onClick={() => setPage(true)}>
          Home
        </div>
        <div className={!page ? style.page : ""} onClick={() => setPage(false)}>
          favorites
        </div>
      </div>
      {page && (
        <Search
          term={{ searchTerm, setSearchTerm }}
          results={{ searchResults, setSearchResults }}
        />
      )}
      <div className={style.description}>
        <div className={style.mainContainer}>
          {selectedCity && page && (
            <CityCard
              item={selectedCity}
              favorites={{ favorites, setFavorites }}
            />
          )}
          {selectedCity &&
            !page &&
            favorites &&
            favorites.map(
              (city) =>
                city.isFavorite && (
                  <CityCard
                    key={city.Key}
                    favorites={{ favorites, setFavorites }}
                    item={city}
                  />
                )
            )}
        </div>
        <div className={style.cityList}>
          <ul>
            {searchResults.map((item) => (
              <li
                key={item.Key}
                className={style.cityName}
                onClick={() => getCurrentConditions(item, apiKey)}
              >
                {item.LocalizedName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
