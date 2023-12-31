import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    movieDetails();
  }, []);

  const movieDetails = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://be-movielisting.onrender.com/api/v1/movieDetails/${id}`
      );
      const data = await response.json();
      setData(data?.movie[0]);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <h1>Movie Details</h1>
      <div className="row">
        {
          loading ? <h2>Loading...</h2> : <>
              <div className="col-sm-6">
          {" "}
          <img
            src={data?.Poster}
            alt="poster"
            className="img-fluid details-img"
          />
        </div>


          <div className="col-sm-6">
            <h2>Name : {data?.Title}</h2>
            <p>Description : {data?.Plot}</p>
            <p>Released On : {data?.Released} </p>
            <p>Cast : {data?.Actors} </p>

            <p>Directed By : {data?.Director}</p>
            <p>Genre: {data?.Genre} </p>
            <p>Total Box Office Collection : {data?.BoxOffice}</p>
            <p>Awards : {data?.Awards}</p>
            <p>IMDB Rating : {data?.imdbRating} / 10</p>
          </div>
          </>
        }
      
        
      </div>
    </div>
  );
};

export default MovieDetails;
