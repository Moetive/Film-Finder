import React, { useEffect, useState } from 'react'
import { API_KEY, BANNER_URL, IMAGE_URL } from '../components/config'
import { Navigate, useParams } from 'react-router-dom';
import ImageComp from "../components/ImageComponent/ImageComp";
import { useMutation } from '@apollo/client';
import { FAVORITE_MOVIES } from '../utils/mutations';

function MoviePage() {
  const [Movie, setMovie] = useState([])
  const [favoriteMovies, { error }] = useMutation(FAVORITE_MOVIES);
  const movieId = useParams()
  function favorite(){
    fetch(`https://api.themoviedb.org/3/movie/${movieId.movieId}?api_key=${API_KEY}&language=en-US`)
    
    .then(response => response.json())
    .then(response => {
      setMovie(response)
    })
    
    console.log(error)
    favoriteMovies({variables:{
      "movieId": Movie.id,
      "movieTitle": Movie.original_title,
      "movieImage": Movie.backdrop_path,
      }})

  }
  useEffect(() => {
    const variable = {}
  
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
        <button onClick={favorite} className="btn btn-lg btn-light m-2">
  Favorite
</button>
    
    </div>
  )
}
export default MoviePage
