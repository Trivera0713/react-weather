import React from "react";

export default function WeatherTemperature(props) {
  
    return (
      <div className="WeatherTemperature">
        <h2>{Math.round(props.fahrenheit)}°</h2>
        <span className="units">
          F 
        
        </span>
      </div>
    );
}
