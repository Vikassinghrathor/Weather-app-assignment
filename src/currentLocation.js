import React, { useState, useEffect } from "react";
import Clock from "react-live-clock";
import Forcast from "./forecast";
import loader from "./images/WeatherIcons.gif";
import ReactAnimatedWeather from "react-animated-weather";
import apiKeys from "./apiKeys";

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

const defaults = {
  color: "white",
  size: 112,
  animate: true,
};

function Weather() {
  const [location, setLocation] = useState({
    lat: undefined,
    lon: undefined,
    errorMessage: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: "CLEAR_DAY",
    sunrise: undefined,
    sunset: undefined,
    errorMsg: undefined,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      getPosition()
        .then((position) => {
          getWeather(position.coords.latitude, position.coords.longitude);
        })
        .catch((err) => {
          getWeather(28.67, 77.22);
          alert(
            "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real-time weather."
          );
        });
    } else {
      alert("Geolocation not available");
    }

    const timerID = setInterval(() => {
      getWeather(location.lat, location.lon);
    }, 600000);

    return () => clearInterval(timerID);
  }, [location.lat, location.lon]);

  const getPosition = (options) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  const getWeather = async (lat, lon) => {
    const api_call = await fetch(
      `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
    );
    const data = await api_call.json();
    setLocation((prevState) => ({
      ...prevState,
      lat: lat,
      lon: lon,
      city: data.name,
      temperatureC: Math.round(data.main.temp),
      temperatureF: Math.round(data.main.temp * 1.8 + 32),
      humidity: data.main.humidity,
      main: data.weather[0].main,
      country: data.sys.country,
    }));

    switch (data.weather[0].main) {
      case "Haze":
        setLocation((prevState) => ({ ...prevState, icon: "CLEAR_DAY" }));
        break;
      case "Clouds":
        setLocation((prevState) => ({ ...prevState, icon: "CLOUDY" }));
        break;
      case "Rain":
        setLocation((prevState) => ({ ...prevState, icon: "RAIN" }));
        break;
      case "Snow":
        setLocation((prevState) => ({ ...prevState, icon: "SNOW" }));
        break;
      case "Dust":
        setLocation((prevState) => ({ ...prevState, icon: "WIND" }));
        break;
      case "Drizzle":
        setLocation((prevState) => ({ ...prevState, icon: "SLEET" }));
        break;
      case "Fog":
        setLocation((prevState) => ({ ...prevState, icon: "FOG" }));
        break;
      case "Smoke":
        setLocation((prevState) => ({ ...prevState, icon: "FOG" }));
        break;
      case "Tornado":
        setLocation((prevState) => ({ ...prevState, icon: "WIND" }));
        break;
      default:
        setLocation((prevState) => ({ ...prevState, icon: "CLEAR_DAY" }));
    }
  };

  if (location.temperatureC) {
    return (
      <React.Fragment>
        <div className="city">
          <div className="title">
            <h2>{location.city}</h2>
            <h3>{location.country}</h3>
          </div>
          <div className="mb-icon">
            {" "}
            <ReactAnimatedWeather
              icon={location.icon}
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
            <p>{location.main}</p>
          </div>
          <div className="date-time">
            <div className="dmy">
              <div id="txt"></div>
              <div className="current-time">
                <Clock format="HH:mm:ss" interval={1000} ticking={true} />
              </div>
              <div className="current-date">{dateBuilder(new Date())}</div>
            </div>
            <div className="temperature">
              <p>
                {location.temperatureC}°<span>C</span>
              </p>
            </div>
          </div>
        </div>
        <Forcast
          icon={location.icon}
          weather={location.main}
          onTemperatureUpdate={(temp) =>
            setLocation((prevState) => ({
              ...prevState,
              temperatureC: Math.round(temp),
            }))
          }
        />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <img src={loader} style={{ width: "50%", WebkitUserDrag: "none" }} alt="error" />
        <h3 style={{ color: "white", fontSize: "22px", fontWeight: "600" }}>
          Detecting your location
        </h3>
        <h3 style={{ color: "white", marginTop: "10px" }}>
          Your current location wil be displayed on the App <br></br> & used
          for calculating Real-time weather.
        </h3>
      </React.Fragment>
    );
  }
}

export default Weather;
