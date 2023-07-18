import React from "react";
import style from "./CityCard.module.scss";

export default function CityCard({ item }) {
  return (
    <li className={style.li}>
      <div>
        <h3 className={style.h3}>
          {item.City}, {item.Country}
        </h3>
        {item.isFavorite ? (
          <div className={style.delete}></div>
        ) : (
          <div className={style.notFavorite}>add to favorites</div>
        )}
      </div>
      <div className={style.details}>
        <p>{item.WeatherText}</p>
        <p>{item.Temperature.Metric.Value}°C</p>
      </div>
    </li>
  );
}
