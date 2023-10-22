import React, { useState,useEffect } from "react";
import ForecastDay from "./ForecastDay";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForceast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(()=> {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DailyForecast">
        <div className="row">
          {forecast.map(function (weatherDay, index) {
            if (index < 5 ) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={weatherDay} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = `445905dadb3d2b0c6f1b916c9d0e3860`;
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
