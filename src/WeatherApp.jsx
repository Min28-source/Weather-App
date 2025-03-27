import SearchBox from "./Searchbox";
import InfoBox from "./InfoBox";
import "./weatherApp.css";
import { useState } from "react";

function WeatherApp() {
  const [weather, setWeather] = useState({
    name: "Wonderpur",
    feels_like: 16.05,
    humidity: 100,
    temprature: 16,
    min_temprature: 16,
    max_temprature: 16,
    description: "Thunderstorm",
  });

  let updateInfo = (result) =>{
    setWeather(result)
  }
  return (
    <>
      <div className="container">
        <h1>The Weather App</h1>
        <SearchBox updateInfo = {updateInfo}/>
        <br />
      <InfoBox info = {weather}/>
      </div>
    </>
  );
}

export default WeatherApp;
