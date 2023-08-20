import "normalize.css";
import "./global.css";

const baseUrl = "http://api.weatherapi.com/v1";
const key = "581e5cf0257e42ec894184439231808";

const fetchWeather = async (location) => {
  try {
    const res = await fetch(
      baseUrl + `/current.json?key=${key}&q=${location}`,
      {
        mode: "cors",
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
