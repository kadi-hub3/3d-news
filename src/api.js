const key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL;

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
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${dayNames[date]}, ${monthNames[month]} ${date}, ${year}`;
};
