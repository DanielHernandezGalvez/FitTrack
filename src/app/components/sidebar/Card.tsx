"use client";
import Image from "next/image";
import VoteAverage from "../VoteAverage";
import Link from "next/link";
import { useState } from "react";
import MovieDetails from "./MovieDetails";

import { useRouter } from "next/navigation";

interface MovieCardProps {
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: string[];
  id: number;
  backdrop_path: string;
  filter: string;
}

export default function Card({
  title,
  overview,
  poster_path,
  release_date,
  vote_average,
  genres,
  id,
  backdrop_path,
  filter,
}: MovieCardProps) {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar si se muestra la pantalla completa

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/default.png";

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${capitalizedMonth} ${day}, ${year}`;
    return formattedDate;
  }
  const router = useRouter();

  return (
    <Link className="cursor-pointer " href={`/movies/details?id=${id}`}>
      <div className="bg-white rounded mx-4 shadow m-2  max-w-[200px]    ">
        <Image
          src={imageUrl}
          alt="Poster"
          className="rounded-t-md mb-4"
          width={200}
          height={300}
          objectFit="cover"
        />
        <VoteAverage voteAverage={vote_average} />
        <div className="description">
          <h2 className="text-1xl font-bold ">{title}</h2>
          <p>
            {release_date !== "" ? (
              formatDate(release_date)
            ) : (
              <p>Coming Soon</p>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
}

// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import VoteAverage from "../VoteAverage";

// const Card = ({ movieID, imageSrc, title, releaseDate, vote_average }) => {
//   return (
//     <div className="border sombra rounded-xl mt-5 flex flex-col flex-wrap movie-card w-[180px] font-sans">
//       <Link
//         className="cursor-pointer hover:opacity-75"
//         href={`/movies/details?key=${movieID}`}
//       >
//         <Image
//           src={`https://image.tmdb.org/t/p/w200_and_h300_face${imageSrc}`}
//           alt={`Poster Movie ${title}`}
//           width={200}
//           height={300}
//           priority
//           className="rounded-t-xl "
//         />
//       </Link>
//       <div className="movie-data text-lg text-copy pt-7 px-3 pb-5 relative min-w-min">
//         <VoteAverage voteAverage={vote_average} />

//         <Link
//           className="text-base cursor-pointer hover:text-cyan-500"
//           href={`/movies/details?key=${movieID}`}
//         >
//           <h2 className="font-bold capitalize cursor-pointer line-clamp-3">
//             {title}
//           </h2>
//         </Link>
//         <p className="text-base text-slate-500">
//           {new Date(releaseDate).toLocaleDateString("en-US", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           })}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;
