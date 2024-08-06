import React from "react";
import { Link } from "react-router-dom";
import './articleCard.css';
const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article._id}`}className="custom-link">
      <div className="col-12 p-2 d-flex flex-grow-1 pb-3 justify-content-center align-items-center border-bottom">
        <img
          src={article.image}
          className="card-img-top w-auto smalImg"
          alt="articles"
        />
        <div className="card-body px-3">
          <h5 className="card-title fw-bold h5-responsive malayalam-text">{article.name}</h5>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
