"use client";
import React, { useEffect, useState } from "react";
import Card from "../Card";
import { searchMovies } from "../service/movie.service";
import { getTopRatedMovies } from "../service/movie.service";

interface MainCardsProps {
  filter: string;
}

const MainCards: React.FC<MainCardsProps> = ({ filter }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      let response;
      if (filter === "popular") {
        response = await searchMovies("popular");
      } else if (filter === "top_rated") {
        response = await getTopRatedMovies(); // Utilizar la función para obtener las películas mejor calificadas
      } else if (filter === "upcoming") {
        response = await searchMovies("upcoming");
      } else {
        response = await searchMovies(""); // Sin filtro, obtener todas las películas
      }
      setMovies(response.slice(0, 20)); // Obtener solo las primeras 5 películas
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
