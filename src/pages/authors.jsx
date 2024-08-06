import React from "react";
import AuthorCard from "../components/authorCard";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export async function loader () {

  try{
      const response= await axios.get(`${import.meta.env.VITE_BASE_API}/authors`);
      const authors = response.data
      return {authors};
  }
  catch(error){
      console.log(error);
      return null;
  }
  
}

const Authors = () => {
  const {authors} = useLoaderData()
  return (
    <main>
      <div className="container d-flex justify-content-center align-items-center">
      <section className="row my-2 p-3">
      <h2 className="text-center fw-bold border-bottom py-3 my-3">Authors</h2>
        {
          authors && authors.map((author)=>(
            <AuthorCard key={author._id} author= {author}/>
          ))
        }
      </section>
      </div>
      
    </main>
  );
};

export default Authors;
