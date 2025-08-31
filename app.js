import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = "YOUR_API_KEY"; // 🔑 Replace with your OpenWeatherMap API key

  const getWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      if (data.cod === "404") {
        setWeather(null);
        alert("City not found!");
      } else {
        setWeather(data);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🌤️ Weather App</h1>

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded-xl border"
        />
        <button
          onClick={getWeather}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow-md"
        >
          Search
        </button>
      </div>

      {weather && (
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-80">
          <h2 className="text-2xl font-semibold">{weather.name}</h2>
          <p className="text-lg">{weather.weather[0].description}</p>
          <p className="text-4xl font-bold">{weather.main.temp}°C</p>
          <p>🌡 Min: {weather.main.temp_min}°C | Max: {weather.main.temp_max}°C</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}
const [dark, setDark] = useState(false);

<button onClick={() => setDark(!dark)}>
  {dark ? "🌙 Dark" : "☀️ Light"}
</button>

<div className={dark ? "bg-gray-900 text-white" : "bg-blue-100 text-black"}>
  {/* Weather UI */}
</div>


export default App;
