"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import {
  getTopRatedMovies,
  searchUpcomingMovies,
  searchMovies,
} from "../service/movie.service";

interface MainCardsProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: string[];
  backdrop_path: string;
  filter: string;
}

const MainCards: React.FC<MainCardsProps> = ({ filter }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      let response = [];
      if (filter === "popular") {
        response = await searchMovies("popular");
      } else if (filter === "top_rated") {
        response = await getTopRatedMovies();
      } else if (filter === "upcoming") {
        response = await searchUpcomingMovies("upcoming");
      } else {
        response = await searchMovies("");
      }
      setMovies(response.slice(0, 20));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [filter]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {movies.map((movie: any) => (
          <div key={movie.id} className=" ">
            <Card
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              genres={movie.genres}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MainCards;
