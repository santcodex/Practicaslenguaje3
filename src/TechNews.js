// src/components/TechNews.jsx
import React, { useEffect, useState } from "react";

const TechNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=10&apiKey=5cd6a2ccd7294d5fbe924e9ce00fa6ee`
      );
      const data = await res.json();
      setArticles(data.articles);
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2>Últimas noticias de tecnología</h2>
      <ul className="news-list">
        {articles.map((article, index) => (
          <li key={index} className="news-item">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <strong>{article.title}</strong>
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechNews;
