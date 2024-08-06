import React from "react";
import { Link } from "react-router-dom";
import './articlesSection.css'; // Ensure this CSS file includes the necessary styles

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

const ArticlesSection = ({ article }) => {
  const maxTitleLength = 50; // Set the maximum length for the title

  return (
    <Link to={`/articles/${article._id}`} className="custom-link">
      <div className="card article-card">
        <img
          src={article.image}
          className="card-img-top article-img"
          alt="articles"
        />
        <div className="card-body">
          <h5 className="card-title article-title malayalam-text">
            {truncateText(article.name, maxTitleLength)}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default ArticlesSection;
