import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {
const [movieData , setMovieData] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
    getMovies()
} ,[])

const getMovies = async () => {
   try {
    setLoading(true)
    const response = await fetch("https://be-movielisting.onrender.com/api/v1/movie-list");
    const data = await response.json()
    setMovieData(data.data)
    setLoading(false)
   } catch (error) {
    console.log(error)
   }
}

  return (
    <div className='container-fluid'>
        <h1 className='mt-2'>List of vintage movies</h1>
        {
          loading ? <h2>Loading...</h2> :   <MovieCard movieData={movieData} />
        }
      
    </div>
  )
}

export default Home