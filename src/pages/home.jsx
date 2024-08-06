import React, { useState } from 'react'
import ArticleCard from '../components/articleCard'
import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';

export async function loader () {

    try{
        const response= await axios.get(`${import.meta.env.VITE_BASE_API}/articles`);
        const Articles = response.data
        const mainArticle = Articles.find(article => article.isMain); // Assuming articles have "isMain" property
        const subArticles = Articles.filter(article => article.sub);
        return { mainArticle,subArticles};
    }
    catch(error){
        console.log(error);
    }
    
  }

const Home = () => {
     const {mainArticle,subArticles} = useLoaderData()
  return (
    <main className='container my-3'>
        <section>
            <h2 className='text-center my-3 pb-2 border-bottom'><span className='text-success text-bolder fs-1 px-2'>|</span>Happening...</h2>
            <div className="row mx-auto pr-2 items-center d-flex align-items-stretch">
      <div className="col-12 col-md-6 d-flex flex-column border-bottom">
        <Link to={`articles/${mainArticle._id}`} className="custom-link">
        <div className="card flex-grow-1 border-0">
          <img
            src={mainArticle.image}
            className="card-img-top"
            alt="articles"
          />
          <div className="card-body d-flex flex-column justify-content-center align-items-center">
            <h5 className="card-title fw-bold h5-responsive">{mainArticle.name}</h5>
            <Link to={'/'} className="btn btn-danger">Read More</Link>
          </div>
        </div>
        </Link>
      </div>
      <div className="col-12 col-md-6 my-2 my-md-0 d-flex flex-column">
        <div className="row gap-3 flex-grow-1">
            {
                subArticles && subArticles.map((article)=>(
                    <ArticleCard key={article._id} article= {article}/>
                ))
            }
        </div>
      </div>
    </div>
        </section>
    </main>
  )
}

export default Home
