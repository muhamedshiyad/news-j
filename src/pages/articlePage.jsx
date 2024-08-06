import axios from "axios";
import React from "react";

import { Link, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API}/articles/${params.articleId}`
    );
    const Article = response.data;
    console.log(Article);
    return { Article };
  } catch (error) {
    console.error(error);
    return null; // Ensure a return value in case of error
  }
}

const ArticlePage = () => {
  const data = useLoaderData();

  if (!data) {
    return (
      <main>
        <section className="container text-center">
          <p>Error loading article. Please try again later.</p>
        </section>
      </main>
    );
  }

  const { Article } = data;
  return (
    <main>
    <section className="container">
        <div className="card my-3">
            <img src={Article.image} alt="article" className="img-fluid" />
            <div className="card-body">
                <h5 className="card-title text-center fw-bold custom-title   malayalam-text">{Article.name}</h5>
                <p className="card-text custom-description   malayalam-text">{Article.description}</p>
                <p className="card-text">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                </p>
                <div className="d-flex justify-content-center align-items-center">
                <Link to={'/articles'} className="btn btn-danger">Go Back</Link>
                </div>
            </div>
        </div>
    </section>
</main>
  );
};

export default ArticlePage;
