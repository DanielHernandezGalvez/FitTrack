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
