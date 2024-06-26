import "./bootstrap.css";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import requests from "./requests";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner featchUrl={requests.netflixOriginals} />
      <MovieRow
        title="Netflix Originals"
        featchUrl={requests.netflixOriginals}
        islargeRow
      />
      <MovieRow title="Action" featchUrl={requests.getActionMovies} />
      <MovieRow title="Horror" featchUrl={requests.getHorrorMovies} />
      <MovieRow title="Comedy" featchUrl={requests.getComedyMovies} />
      <MovieRow title="Romance" featchUrl={requests.getRomanceMovies} />

    </>
  );
}

export default App;
