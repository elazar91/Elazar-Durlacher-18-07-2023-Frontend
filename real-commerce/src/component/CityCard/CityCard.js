import React from "react";
import style from "./CityCard.module.scss";

export default function CityCard({ item }) {
  return (
    <li className={style.li}>
      <h3>
        {item.City}, {item.Country}
      </h3>
      {/* <div className={style.notFavorite}></div> */}
      {item.isFavorite ? (
        <div className={style.delete}></div>
      ) : (
        <div className={style.favorite}></div>
      )}
      <p>Weather: {item.WeatherText}</p>
      <p>Temperature: {item.Temperature.Metric.Value}°C</p>
    </li>
  );
}
