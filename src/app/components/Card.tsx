import Image from "next/image";
import VoteAverage from "./VoteAverage";

interface MovieCardProps {
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genres: string[];
}

export default function Card({
  title,
  overview,
  poster_path,
  release_date,
  vote_average,
  genres,
}: MovieCardProps) {
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "/default-image.png";

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${capitalizedMonth} ${day}, ${year}`;
    return formattedDate;
  }

  return (
    <div className="bg-white rounded  shadow m-2  max-w-[200px]   ">
      <Image
        src={imageUrl}
        alt="Poster"
        width={200}
        height={550}
        objectFit="cover"
        className=" h-65  rounded-t-md mb-4"
      />
      {/* <span className="average">
        <span className="average-rate"> */}
      {/* <p>{vote_average.toFixed(0)}%</p> */}
      <VoteAverage voteAverage={vote_average} />
      {/* </span>
      </span> */}
      <div className="description">
        <h2 className="text-1xl font-bold ">{title}</h2>
        {/* <p className="text-sm text-gray-500">{overview.substring(0, 150)}</p> */}
        <p>
          {release_date !== "" ? formatDate(release_date) : <p>Coming Soon</p>}
        </p>

        {/* <p>Genres: {genres}</p> */}
      </div>
    </div>
  );
}
