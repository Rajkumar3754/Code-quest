import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from '../../common/apis/MovieApi'
import { APIkey } from '../../common/apis/MovieApiKey'
import { useDispatch } from "react-redux";
import { addMovies } from "../../Features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      try {
        console.log("Using API Key:", APIkey);
        const response = await MovieApi
          .get(`?apiKey=${APIkey}&s=${movieText}&type=movie`);
        console.log("The response from Api ", response);
        dispatch(addMovies(response.data)); // Dispatching with parentheses
      } catch (err) {
        console.error("Error fetching movies:", err);
        if (err.response) {
          console.error("Response data:", err.response.data);
          console.error("Response status:", err.response.status);
          console.error("Response headers:", err.response.headers);
        } else if (err.request) {
          console.error("Request data:", err.request);
        } else {
          console.error("Error message:", err.message);
        }
      }
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
