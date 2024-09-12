import axios from 'axios';

const API_KEY = 'e08ffb8cecf1f3ce1057feb1d4ae5761';

export const fetchNews = async () => {
  const response = await axios.get(`https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en`);
  return response.data.articles;
};

export const fetchCategoryNews = async (category) => {
  const response = await axios.get(`https://gnews.io/api/v4/top-headlines?token=${API_KEY}&topic=${category}&lang=en`);
  return response.data.articles;
};
