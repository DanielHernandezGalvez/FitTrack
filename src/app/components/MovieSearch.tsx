"use client";
import React, { useState } from "react";
import { searchMovies } from "./service/movie.service";
import Card from "./Card";
import { SearchBar } from "./SearchBar";

export const MovieSearch = () => {
  const [movieData, setMovieData] = useState([]);

  const HandlerSearch = async (query: string) => {
    const results = await searchMovies(query);
    setMovieData(results);
  };
  return (
    <div>
      <SearchBar onSearch={HandlerSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 ">
        {movieData.map((movie: any) => (
          <div className="mx-auto">
            <Card
              key={movie.id}
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
    </div>
  );
};
