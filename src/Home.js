import { useEffect, useState } from 'react';
import { fetchNews } from './NewsService';
import NewsItem from './NewsItem';
import './App.css'; 

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const articles = await fetchNews();
        setNews(articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    getNews();
  }, []);

  return (
    <div className="news-container">
      {news.length > 0 ? (
        news.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))
      ) : (
        <p>Loading news...</p> 
      )}
    </div>
  );
};

export default Home;
