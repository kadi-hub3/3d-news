const key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL;
const weatherKey = process.env.REACT_APP_APIWEATHER_KEY;

export const fetchArticles = async (country, category) => {
  const countryQuery = "?country=";
  const categoryQuery = "&category=";
  // const endpoint = `${url}${countryQuery}${country}${categoryQuery}${category}&apiKey=${key}`;

  // try {
  //   const response = await fetch(endpoint);
  //   if (response.ok) {
  //     const jsonResponse = await response.json();
  //     const articles = jsonResponse.articles;
  //     return articles;
  //   }
  //   throw new Error("Request Failed!");
  // } catch (error) {
  //   console.log(error);
  // }
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

export const fetchWeather = async () => {
  let url = "api.openweathermap.org/data/2.5/weather?q=London,uk&appid=";
  const endpointW =
    "http://api.openweathermap.org/data/2.5/weather?q=london&appid=a2cebab57e33125282ae6fc56b3c8966";
  try {
    const response = await fetch(endpointW);
    console.log(response);
    if (response.ok) {
      const jsonResponse = await response.json();
      const weather = await jsonResponse.weather;
      const main = await jsonResponse.main;
      console.log(weather);
      console.log(jsonResponse);
      return [main, weather];
    }
  } catch (err) {
    console.log(err);
  }
};
