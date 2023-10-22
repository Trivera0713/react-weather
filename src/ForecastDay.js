import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="ForecastDay">{day()} </div>
      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="ForecastTemp">
        <span className="ForecastMax">{Math.round(props.data.temp.max)}°</span>
        /
        <span className="ForecastMin">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
