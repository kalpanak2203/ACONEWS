// Home.js
import { useEffect, useState } from 'react';
import { fetchNews } from './NewsService';
import NewsItem from './NewsItem';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const articles = await fetchNews();
      setNews(articles);
    };
    getNews();
  }, []);

  return (
    <div className="news-container">
      {news.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default Home;
