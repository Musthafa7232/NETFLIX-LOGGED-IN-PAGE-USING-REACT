import React, { useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY, IMAGE_URL } from "../constants/constants";
import axios from "../../axios";
const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        setMovie(response.data.results[Math.floor(Math.random() * 20)]);
      });
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${IMAGE_URL + movie?.backdrop_path})` }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">
          {movie.name ? movie.name : movie.original_title}{" "}
        </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="discription">{movie.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
