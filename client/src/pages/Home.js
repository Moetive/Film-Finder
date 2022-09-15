import React, { useEffect, useState, initialState } from "react";
// import { useQuery } from "@apollo/client";
import { API_URL, API_KEY, IMAGE_URL, BANNER_URL } from "../components/config";

import ImageComp from "../components/ImageComponent/ImageComp";
import { Typography, Row, Col } from "antd";
import MoviesRow from "../components/MoviesRow/MoviesRow";
const { Title } = Typography;

const Home = () => {
  const [state, SetState] = useState(initialState);
  const [Movies, setMovies] = useState([]);
  const [Page, setPage] = useState(initialState);
  useEffect(() => {
    const refresh = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    refreshMovies(refresh);
  }, [])
    const refreshMovies = (path) =>{
      fetch(path)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies(response.results);
        setPage(response.page)
      });
  }
  const loadMore = () => {
    const refresh = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${Page + 1}`
    refreshMovies(refresh);
  }
  return (
    <main>
      <div>
        {/* <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        > */}
        {Movies[0] && (
          <ImageComp
            image={`${BANNER_URL}${Movies[0].backdrop_path}`}
            title={Movies[0].original_title}
            text={Movies[0].overview}
          />
        )}
      </div>

      {/* </div> */}
      <div style={{  width: "100%", margin: "1rem auto" }}>
      
        
        <hr />
        
        
        {/* <Row gutter={[16, 16]}> */}
          {Movies &&
            Movies.map((movie, index) => (
              <React.Fragment key={index}>
                <MoviesRow
                  image={
                    movie.poster_path && `${BANNER_URL}${movie.backdrop_path}`
                  }
                  movieId={movie.id}
                  title={movie.original_title}
                  text={movie.overview}
                />
              </React.Fragment>
            ))}
        {/* </Row> */}

      

      <hr/>
      <button onClick={loadMore} className="btn btn-lg btn-light m-2">
  Load More
</button>
    </div>
    </main>
    
   
    
  );
};

export default Home;
