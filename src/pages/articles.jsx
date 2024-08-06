import React, { useState } from "react";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import ArticlesSection from "../components/articlesSection";
export async function loader() {
  try {
    const response= await axios.get(`${import.meta.env.VITE_BASE_API}/articles`);
        const articlesAll = response.data
        const articles = articlesAll.filter(article => !article.main && !article.sub);
        const subArticles = articlesAll.filter(article => article.sub);
    return { articles,subArticles }; // Returning fetched data
  } catch (error) {
    console.error(error); // Logging error
    return null; // Returning null in case of error
  }
}

const Articles = () => {
  const { articles,subArticles } = useLoaderData();
  if (!articles) {
    return (
      <main>
        <section className="container">
          <p>Loading...</p>
        </section>
      </main>
    );
  }

  return (
    <main className="container my-3">
      <section>
        <h2 className="text-center my-3 pb-2 border-bottom">
          <span className="text-success text-bolder fs-1 px-2">|</span>
          All Articles
        </h2>
        <div className="row mx-auto pr-2 items-center d-flex align-items-stretch">
          <div className="col-12 col-md-6 d-flex flex-column border-bottom">
          <div className="row gap-3 flex-grow-1">
              {subArticles.map((article) => (
                <ArticlesSection key={article._id} article={article} />
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6 my-2 my-md-0 d-flex flex-column">
            <div className="row gap-3 flex-grow-1">
              {articles.map((article) => (
                <ArticlesSection key={article._id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Articles;
