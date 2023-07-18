import React from "react";

export default function CityCard({ item }) {
  return (
    <li>
      <h3>
        {item.City}, {item.Country}
      </h3>
      <p>Weather: {item.WeatherText}</p>
      <p>Temperature: {item.Temperature.Metric.Value}°C</p>
    </li>
  );
}
