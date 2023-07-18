"use client";
import style from "./page.module.scss";
import Search from "@/component/search/Search";
import weatherData from "../component/demyData";
import NavBar from "@/component/navigation/NavBar";
import CityCard from "../component/CityCard/CityCard";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState();

  return (
    <main className={style.main}>
      <NavBar />
      <div className={style.description}>
        <div className={style.mainContainer}>
          <Search
            weatherData={weatherData}
            term={{ searchTerm, setSearchTerm }}
            results={{ searchResults, setSearchResults }}
          />
          {selectedCity && <CityCard item={selectedCity} />}
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
