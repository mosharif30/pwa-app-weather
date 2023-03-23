import { useState } from "react";
import fetchWeather from "../utils/FetchWeather";
import "../App.css";
function Dispaly() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const search = async (e) => {
    setLoading(true);
    const data = await fetchWeather(query);
    console.log(data);
    setWeather(data);
    setQuery("");
    setLoading(false);
  };

  return (
    <div className="main-container">
      <span className="searchSection">
        {" "}
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          //onKeyPress={search}
        />
        {loading ? (
          <button className="button" disabled>
            loading
          </button>
        ) : (
          <button className="button" onClick={search}>
            search
          </button>
        )}
      </span>

      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dispaly;
