import React, { useEffect, useState } from "react";
// import { useQuery } from "@apollo/client";
import { API_URL, API_KEY, IMAGE_URL } from "../components/config";
import ImageComp from "../components/ImageComponent/ImageComp";

const Home = () => {
  const [Movies, setMovies] = useState([])
  useEffect(() =>{
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setMovies(response.results)

    })
  }
  ,[])
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          {Movies[0] &&
         <ImageComp image={`${IMAGE_URL}${Movies[0].backdrop_path}`} title={Movies[0].original_title} text={Movies[0].overview}/> }
        </div>
        
       
      </div>
    </main>
  );
};

export default Home;
