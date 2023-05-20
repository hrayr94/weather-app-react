import { useState } from "react";
import "./App.css";

const api = {
  key: "03b234130a743444a38c212a4233c4dd",
  base: "https://api.openweathermap.org/data/2.5/weather?q=",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");

  const searchPressed = () => {
    fetch(`${api.base}${search}&appid=${api.key}&units=metric`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* header  */}
        <h1>Wether App</h1>
        {/* search box  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>search</button>
        </div>
        {weather?.main && weather?.weather && (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temp F/C  */}
            <p>
              {`${weather.main.temp}°C/ ${
                (weather.main.temp * 9) / 5 + 32
              } °F ` ?? ""}
            </p>

            {/* Condition (Sunny) */}
            <p>{weather.weather[0].description}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

// {weather !== undefined &&
//   weather !== null &&
//   weather.main &&
//   weather.weather ? (
// <div>
//   {/* Location  */}
//   <p>{weather.name}</p>

//   {/* Temp F/C  */}
//   {weather.main.temp !== undefined && (
//     <p>
//       {weather.main.temp} °C / {(weather.main.temp * 9) / 5 + 32} °F
//     </p>
//   )}

//   {/* Condition (Sunny) */}
//   <p>{weather.weather[0].description}</p>
// </div>
//   ) : (
