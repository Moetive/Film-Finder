import React, { useEffect, useState } from 'react'
import { API_KEY, BANNER_URL, IMAGE_URL } from '../components/config'
import { Navigate, useParams } from 'react-router-dom';
import ImageComp from "../components/ImageComponent/ImageComp";

function MoviePage() {
  const [Movie, setMovie] = useState([])
  const movieId = useParams()
  useEffect(() => {
    
  
    fetch(`https://api.themoviedb.org/3/movie/${movieId.movieId}?api_key=${API_KEY}&language=en-US`)
    
    .then(response => response.json())
    .then(response => {
      setMovie(response)
    })
  }, [])
  
  return (
    <div>
      
      {Movie && (
          <ImageComp
            image={`${IMAGE_URL}${Movie.backdrop_path}`}
            title={Movie.original_title}
            text={Movie.overview}
          />
        )}
    
    </div>
  )
}
export default MoviePage
