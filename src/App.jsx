import { useEffect, useState } from "react";

// Replace with your OpenWeatherMap API key
const API_KEY = "YOUR_API_KEY";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [dark, setDark] = useState(true);

  // ✅ Fetch Current Weather
  const getWeather = async (query) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.code !== 200) {
        alert("City not found!");
        return;
      }
      setWeather(data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  // ✅ Fetch 5-Day Forecast
  const getForecast = async (query) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.cod !== "200") return;

      // Filter: pick one forecast per day (12:00:00)
      const daily = data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(daily);
    } catch (err) {
      console.error("Error fetching forecast:", err);
    }
  };

  // ✅ Search by City
  const handleSearch = () => {
    if (!city) return;
    getWeather(city);
    getForecast(city);
  };

  // ✅ Detect Current Location
  const detectLocation = () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
        );
        const data = await res.json();
        setWeather(data);
        getForecast(data.name); // fetch forecast for detected city
      } catch (err) {
        console.error("Error detecting location:", err);
      }
    });
  };

  return (
    <div
      className={`min-h-screen p-6 transition-colors ${
        dark ? "bg-gray-900 text-white" : "bg-blue-100 text-black"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🌍 Weather Dashboard</h1>
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-xl shadow-md border"
        >
          {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Search */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded-xl border w-64 text-black"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow-md"
        >
          Search
        </button>
        <button
          onClick={detectLocation}
          className="bg-green-500 text-white px-4 py-2 rounded-xl shadow-md"
        >
          📍 My Location
        </button>
      </div>

      {/* Current Weather */}
      {weather && (
        <div className="bg-white text-black rounded-2xl shadow-lg p-6 text-center mb-6 w-80 mx-auto">
          <h2 className="text-2xl font-semibold">{weather.name}</h2>
          <p className="capitalize">{weather.weather[0].description}</p>
          <p className="text-4xl font-bold">{weather.main.temp}°C</p>
          <p>
            🌡 Min: {weather.main.temp_min}°C | Max: {weather.main.temp_max}°C
          </p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
      )}

      {/* 5-Day Forecast */}
      {forecast.length > 1 && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            5-Day Forecast
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {forecast.map((day) => (
              <div
                key={day.dt}
                className="bg-white text-black p-4 rounded-xl shadow text-center"
              >
                <p className="font-semibold">
                  {new Date(day.dt_txt).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>
                <p className="text-xl">{day.main.temp}°C</p>
                <p className="capitalize">{day.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
