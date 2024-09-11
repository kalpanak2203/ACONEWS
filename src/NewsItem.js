import React from 'react';
import './NewsItem.css'; 

const NewsItem = ({ article }) => {
  return (
    <div className="news-card">
      <img className="news-image" src={article.image} alt={article.title} />
      <div className="news-content">
        <h3 className="news-title">{article.title}</h3>
        <p className="news-description">{article.description}</p>
        <a href={article.url} className="news-link" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
