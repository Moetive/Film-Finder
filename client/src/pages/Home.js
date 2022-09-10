import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { API_URL, API_KEY } from "../components/config";

const Home = () => {
  useEffect(() =>{
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
  })
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        ></div>
      </div>
    </main>
  );
};

export default Home;
