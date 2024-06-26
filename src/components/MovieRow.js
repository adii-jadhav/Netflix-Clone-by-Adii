import axios from "axios";
import React, { useEffect, useState } from "react";
import demoImg from "../demo.jpg";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function MovieRow({ title, featchUrl, islargeRow }) {

  const [movies, setmovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  useEffect(() => {
    const featchData = async () => {
      try {
        const { data } = await axios.get(featchUrl);
        setmovies(data.results);
        
      } catch (error) {
        console.log("error in featching the data", error.message);
      }
    };

    featchData();
 
  }, []);

  const showtrailer = (movie)=>{

    console.log(movie.name);
    if(trailerUrl){
      settrailerUrl('');
    }else{
      movieTrailer(movie?movie.name:"").then((url)=>{
     
        const urlParams = new URLSearchParams(new URL(url).search);
        settrailerUrl(urlParams.get("v"));
       

      }).catch((error)=>{
        console.log(error);
      })
    }
  }

  const opts = {
    height:"380",
    width:"100%",
    playerVars:{
      autoplay:1
    }
  }

  return (
    <div className="mt-2">
      <div className="title ">
        <h2>{title}</h2>
      </div>
      {movies.length!==0 ? (
        <div className="movie-row m-2 p-2">
          {movies.map((movie, idx) => {
            return (
              <div
                className={`${islargeRow ? "img-box-lg" : "img-box"} mx-2 p-1`}
                onClick={()=>showtrailer(movie?movie:"")}
              >
                <img
                  src={movie.backdrop_path?`https://image.tmdb.org/t/p/original/${
                    islargeRow ? movie.poster_path : movie.backdrop_path
                  }`:""}
                  alt={movie.name}
                  key={idx}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <LoadingRow />
      )}

      {trailerUrl?<YouTube videoId={trailerUrl} opts={opts}/>:""}
    </div>
  );
}

const LoadingRow = () => {
  const arr = [1, 23, 4, 5, 5, 7, 7];
  return (
    <div>
      <div className="loading-row">
        {arr.map(() => {
          return <div className="movie-loading-box"></div>;
        })}
      </div>
    </div>
  );
};

export default MovieRow;
