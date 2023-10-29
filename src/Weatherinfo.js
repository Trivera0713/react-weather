import React from "react";
import Dateformat from "./Dateformat";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="container-main">
      <h1>{props.data.city}</h1>
      <h4>
        {" "}
        <Dateformat date={props.data.date} />{" "}
      </h4>
      <div className="row info">
        <div className="col-md-6">
          <h2>{Math.round(props.data.temperature)}°</h2>
          <span className="unit">F</span>
          <span className="feel">Feels like {Math.round(props.data.feel)}</span>
        </div>
        <div className="col-md-6">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col-md-6">
          <ul className="hi-low">
            <li><strong>{Math.round(props.data.high)}°</strong></li> |
            <li>{Math.round(props.data.low)}°</li>
          </ul>
        </div>
        <div className="col-md-6">
          <p className="description"> {props.data.description}</p>
        </div>
      </div>
    </div>
  );
}
