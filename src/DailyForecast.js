import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForceast() {
  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Sunday </div>
          <WeatherIcon code="01d" />
          <div className="ForecastTemp">
            <span className="ForecastMax">19°</span>
            <span className="ForecastMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
