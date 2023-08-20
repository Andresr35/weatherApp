import "normalize.css";
import "./global.css";

const baseUrl = "http://api.weatherapi.com/v1";
const key = "581e5cf0257e42ec894184439231808";

const fetchWeather = async (location) => {
  try {
    const res = await fetch(
      `${baseUrl}/current.json?key=${key}&q=${location}`,
      {
        mode: "cors",
      }
    );

    return await res.json();
  } catch (error) {
    return { status: "Error" };
  }
};

const locationForm = document.querySelector("form");
const main = document.querySelector("main");
const container = main.appendChild(document.createElement("div"));
container.id = "container";

locationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchWeather(e.target[0].value).then((res) => {
    container.replaceChildren();
    Object.keys(res).forEach((value) => {
      const div = container.appendChild(document.createElement("div"));
      div.innerText = value;
      Object.keys(res[value]).forEach((sVal) => {
        const innerDiv = div.appendChild(document.createElement("div"));
        innerDiv.innerText = sVal.concat(":");
        const innerSpan = innerDiv.appendChild(document.createElement("span"));
        innerSpan.innerText = res[value][sVal];
      });
    });
  });
});
