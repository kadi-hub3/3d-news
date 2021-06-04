const key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL;
const inputUser = "us";

export const fetchArticles = async () => {
  const countryQuery = "?country=";
  const endpoint = `${url}${countryQuery}${inputUser}&apiKey=${key}`;

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
