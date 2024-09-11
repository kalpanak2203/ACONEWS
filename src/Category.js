// Category.js
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCategoryNews } from './NewsService';
import NewsItem from './NewsItem';

const Category = () => {
    const { name } = useParams();
    const [categoryNews, setCategoryNews] = useState([]);
  
    useEffect(() => {
      const getCategoryNews = async () => {
        const articles = await fetchCategoryNews(name);
        setCategoryNews(articles);
      };
      getCategoryNews();
    }, [name]);
  
    return (
      <div className="news-container">
        {categoryNews.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
      </div>
    );
  };
  
  export default Category;