import axios from 'axios';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API}/authors/${params.authorId}`
    );
    const Author = response.data;
    console.log(Author);
    return { Author };
  } catch (error) {
    console.error(error);
    return null; // Ensure a return value in case of error
  }
}

const AuthorPage = () => {
  const data = useLoaderData();

  if (!data) {
    return (
      <main>
        <section className="container text-center">
          <p>Error loading author. Please try again later.</p>
        </section>
      </main>
    );
  }

  const { Author } = data;
  return (
    <main>
      <section className="container">
        <div className="my-5">
          <img src={Author.image} alt="author" className="img-fluid rounded-circle author-img" />
          <div className="card-body">
            <h5 className="card-title text-center fw-bold custom-title">
              {Author.name} <span>({Author.age})</span>
            </h5>
            <p className="card-text custom-description">{Author.about}</p>
            <div className="d-flex justify-content-center align-items-center">
              <Link to={'/authors'} className="btn btn-danger">Go Back</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AuthorPage;
