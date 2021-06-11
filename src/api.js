const key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL;
const weatherKey = process.env.REACT_APP_API_WEATHER_KEY;
const ipKey = process.env.REACT_APP_IP_KEY;

export const fetchArticles = async (country, category) => {
  const countryQuery = "?country=";
  const categoryQuery = "&category=";
  const endpoint = `${url}${countryQuery}${country}${categoryQuery}${category}&apiKey=${key}`;
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      const articles = jsonResponse.articles;
      return articles;
    }
    throw new Error("Request Failed!");
  } catch (error) {
    console.log(error);
  }
};

export const fetchSpecificArticles = async (query) => {
  const endpoint = `${url}?q=${query}&apiKey=${key}`;
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonRes = await response.json();
      const queryArticles = jsonRes.articles;
      console.log(queryArticles);
      return queryArticles;
    }
    throw new Error("Requested Articles Not Found!");
  } catch (err) {
    console.log(err);
  }
};
export const getCurrentDate = () => {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
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
  let newDate = new Date();
  let day = newDate.getDay();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();

  return `${dayNames[day]}, ${monthNames[month]} ${date}, ${year}`;
};

export const fetchWeather = async (city) => {
  const endpointW = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`;
  try {
    const response = await fetch(endpointW);
    if (response.ok) {
      const jsonResponse = await response.json();
      const weather = await jsonResponse.weather;
      const main = await jsonResponse.main;
      return [main, weather];
    }
    throw new Error("Weather Request Failed!");
  } catch (err) {
    console.log(err);
  }
};

export const fetchLocation = async () => {
  const locationURL = `https://api.ipgeolocation.io/ipgeo?apiKey=${ipKey}`;
  try {
    const getLocation = await fetch(locationURL);
    if (getLocation.ok) {
      const jsonLocation = await getLocation.json();
      const city = await jsonLocation.city;
      console.log(city);
      return city;
    }
    throw new Error("Location Request Failed!");
  } catch (err) {
    console.log(err);
  }
};
