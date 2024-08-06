import React from "react";
import { Link } from "react-router-dom";
import './articleCard.css';
const AuthorCard = ({ author }) => {
  return (
      <div className="col-12 col-sm-6 col-md-3 my-3 d-flex justify-content-center align-items-center my-5">
        <Link to={`/authors/${author._id}`}className="custom-link">
        <div className="card elegant-card rounded-circle overflow-hidden">
          <img src={author.image} alt="author" className="card-img-top" />
          <div className="card-body text-center">
            <h5 className="card-title h5-responsive">{author.name}</h5>
          </div>
        </div>
        </Link>
      </div>

  );
};

export default AuthorCard;
