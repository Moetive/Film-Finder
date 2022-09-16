import React, { useEffect } from 'react'
import { API_KEY } from '../components/config'
import { Navigate, useParams } from 'react-router-dom';


function MoviePage() {
  const movieId = useParams()
  useEffect(() => {
    
  
    fetch(`https://api.themoviedb.org/3/movie/${movieId.movieId}/keywords?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
  }, [])
  
  return (
    <div>
      
        
    
    </div>
  )
}
export default MoviePage
