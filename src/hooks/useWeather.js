import { useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    cloudePrecentage: "",
    humidity: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: "",
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchApiData = async (longitude, latitude) => {
    try {
      setLoading({
        ...loading,
        status: true,
        message: "Featching weather data",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/4.0/onecall/current?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`,
      );

      if (!response.ok) {
        const errorMessage = `Featching weather data fail ${response.state}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setWeatherData({
        ...weatherData,
        location: data.name,
        climate: data.weather[0].main,
        temperature: data.main.temp,
        maxTemperature: data.main.temp_max,
        minTemperature: data.main.temp_min,
        humidity: data.main.humidity,
        cloudePrecentage: data.clouds.all,
        wind: data.wind.speed,
        time: data.dt,
        longitude: longitude,
        latitude: latitude,
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        status: false,
        message: "",
      });
    }
  };
};
