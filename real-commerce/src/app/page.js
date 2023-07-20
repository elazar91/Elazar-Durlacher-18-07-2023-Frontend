"use client";
import style from "./page.module.scss";
import Search from "@/component/search/Search";
import weatherData from "../component/demyData";
import CityCard from "../component/CityCard/CityCard";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [page, setPage] = useState(true);
  const [favorites, setFavorites] = useState([]);

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
      <div className={style.description}>
        <div className={style.mainContainer}>
          <Search
            weatherData={weatherData}
            term={{ searchTerm, setSearchTerm }}
            results={{ searchResults, setSearchResults }}
          />
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
                    key={city?.id}
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
                className={style.cityName}
                onClick={() => setSelectedCity(item)}
                key={item.id}
              >
                {item.City}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
