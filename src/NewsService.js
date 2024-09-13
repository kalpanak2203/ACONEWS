import axios from 'axios';

const API_KEY = 'e08ffb8cecf1f3ce1057feb1d4ae5761';

export const fetchNews = async (filters) => {
  const { category, country, language } = filters;
  let url = `https://gnews.io/api/v4/top-headlines?apikey=${API_KEY}&lang=en`;

  if (category) url += `&category=${category}`;
  if (country) url += `&country=${country}`;
  if (language) url += `&language=${language}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
};

export const fetchCategoryNews = async (category) => {
  const response = await axios.get(`https://gnews.io/api/v4/top-headlines?token=${API_KEY}&topic=${category}&lang=en`);
  return response.data.articles;
};
