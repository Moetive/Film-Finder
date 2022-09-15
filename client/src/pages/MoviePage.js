import React, { useEffect } from 'react'
import { API_URL, API_KEY } from '../components/config'
// import { response } from 'express'

function MoviePage(props) {
  
  useEffect(() => {
    const movieId = props.match.params.movieId

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=${API_KEY}`)
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
