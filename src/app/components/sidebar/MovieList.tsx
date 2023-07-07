"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: string[];
  id: number;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing",
          {
            params: {
              api_key: "4f298a53e552283bee957836a529baec",
              language: "en-US",
              page: 1,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {movies.map((movie) => (
          <Card
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
            genres={movie.genres}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;

// "use client";
// import React from "react";
// import { useEffect, useState } from "react";

// import Card from "./Card";

// const MovieList = ({ menuSeleted }) => {
//   const [movies, setMovies] = useState([]);
//   const API_KEY = "37c25cc13aeb0ec14911a45f19e35079";
//   //const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
//   if (!menuSeleted && menuSeleted === "top_rated") {
//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2MyNWNjMTNhZWIwZWMxNDkxMWE0NWYxOWUzNTA3OSIsInN1YiI6IjY0YTRmMGU0YTBiZTI4MDBjYmY2MjQ4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96i3JKk4jHwXJS70xjZgyLBjxOATbAJDHGotwTGZ7gc",
//       },
//     };

//     fetch(
//       "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => console.log(response))
//       .catch((err) => console.error(err));
//     console.log("Esto selecciono top" + menuSeleted);
//   } else if (!menuSeleted && menuSeleted === "upcoming") {
//     console.log("Esto selecciono up =" + menuSeleted);
//   } else {
//     console.log("Esto selecciono pop=" + menuSeleted);

//     useEffect(() => {
//       const fetchMovies = async () => {
//         try {
//           const response = await fetch(
//             `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
//           );
//           const data = await response.json();

//           if (data.results && data.results.length > 0) {
//             setMovies(data.results);
//             //console.log(data.results);
//           }
//         } catch (error) {
//           console.error("Error al obtener las películas:", error);
//         }
//       };

//       fetchMovies();
//     }, []);
//   }

//   return (
//     <div className="flex flex-wrap justify-evenly gap-2 max-w-6xl pb-10">
//       {movies.map((movie) => (
//         <Card
//           movieID={movie.id}
//           imageSrc={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
//           title={movie.title}
//           releaseDate={movie.release_date}
//           vote_average={movie.vote_average}
//         />
//       ))}
//     </div>
//   );
// };

// export default MovieList;
