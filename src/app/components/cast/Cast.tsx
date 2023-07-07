import React from "react";
import CastCard from "./CastCard";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: string[];
  actors: Actor[];
}

interface Actor {
  id: number;
  name: string;
  profile_path: string;
}

interface CardProps {
  id: number;
  name: string;
  profile_path: string;
}

const Cast: React.FC<CardProps> = ({ id, name, profile_path }) => {
  return (
    <div className="actor-card">
      <img src={profile_path} alt={name} />
      <p>{name}</p>
    </div>
  );
};

const MovieComponent: React.FC<{ movie: Movie }> = ({ movie }) => {
  const { actors } = movie;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={movie.poster_path} alt={movie.title} />
      <p>{movie.overview}</p>

      <h3>Actors:</h3>
      <div className="actors-container">
        {actors.map((actor) => (
          <CastCard
            key={actor.id}
            id={actor.id}
            name={actor.name}
            profile_path={actor.profile_path}
          />
        ))}
      </div>
    </div>
  );
};
