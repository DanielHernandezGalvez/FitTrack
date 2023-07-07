import React from "react";

interface MovieDetailsProps {
  title: string;
  overview: string;
  release_date: string;
  genres: string[];
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
  title,
  overview,
  release_date,
  genres,
}) => {
  return (
    <div className="fullscreen-overlay">
      <div className="fullscreen-content">
        <h2>{title}</h2>
        <p>{overview}</p>
        <p>Release Date: {release_date}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
