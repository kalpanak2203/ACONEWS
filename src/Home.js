import { useEffect, useState } from 'react';
import { fetchNews } from './NewsService';
import NewsItem from './NewsItem';
import SearchBar from './SearchBar';
import Filters from './Filters';
import './App.css';

const Home = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [filters, setFilters] = useState({ category: '', country: '', language: '' });
  const [searchQuery, setSearchQuery] = useState('');

  // Function to fetch news articles based on filters
  const fetchFilteredNews = async () => {
    try {
      const articles = await fetchNews(filters);
      setNews(articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  // Fetch news when filters change
  useEffect(() => {
    fetchFilteredNews();
  }, [filters]);

  // Filter news articles based on search query
  useEffect(() => {
    setFilteredNews(
      news.filter(article => article.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, news]);

  // Handle search query change
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      <Filters onFilterChange={handleFilterChange} />
      <div className="news-container">
        {filteredNews.length > 0 ? (
          filteredNews.map((article, index) => (
            <NewsItem key={index} article={article} />
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
