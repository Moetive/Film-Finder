import React, { useEffect, useState, initialState } from "react";
// import { useQuery } from "@apollo/client";
import { API_URL, API_KEY, IMAGE_URL, BANNER_URL } from "../components/config";
import ImageComp from "../components/ImageComponent/ImageComp";
// import Button from '@mui/material/Button';
import { Typography, Row } from "antd";
import MovieRow from "../components/MoviesRow/MoviesRow";
// import Grid from '@mui/material/Grid';
// import FormLabel from '@mui/material/FormLabel';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import RadioGroup from '@mui/material/RadioGroup';
// import Radio from '@mui/material/Radio';
// import Paper from '@mui/material/Paper';
const { Title } = Typography;

const Home = () => {
  const [state, SetState] = useState(initialState);
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies(response.results);
      });
  }, []);
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
      <div style={{ width: "70%", margin: "0" }}>
        <button className="btn btn-lg btn-light m-2">Load More</button>
        <hr />

        <Row gutter={[16, 16]}>
          {Movies &&
            Movies.map((movie, index) => (
              <React.Fragment key={index}>
                <MovieRow
                  image={
                    movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`
                  }
                  movieId={movie.id}
                />
              </React.Fragment>
            ))}
        </Row>

        {/* </div> */}

                  
      </div>
    </main>
  );
};

export default Home;
