import axios from "axios";
import React, { useEffect, useState } from "react";
import demoImg from "../demo.jpg";

export default function Banner({ featchUrl }) {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    const feachData = async () => {
      try {
        const { data } = await axios.get(featchUrl);
        if (data) {
          setmovie(
            data.results[Math.floor(Math.random() * data.results.length - 1)]
          );
        }
      } catch (error) {
        console.log("error in featching ", error.message);
      }
    };

    feachData();
  }, []);
 
  return (
    <>
      <div
        className="banner text-white container-fluid"
        style={{
          backgroundImage: `url(
       " https://image.tmdb.org/t/p/original/${
          movie.backdrop_path 
       }"
      )`,
        }}
      >
        <div className="row banner-content  p-2">
          <div className="col-md-9  m-3">
            <h1 className="my-1">{movie.name}</h1>
            <div className="banner-btns ">
              <button className="btn ">Play</button>
              <button className="btn ">My List</button>
            </div>
            <p className="mt-3">{movie.overview}</p>
          </div>
        </div>
      </div>
      
    </>
  );
}
