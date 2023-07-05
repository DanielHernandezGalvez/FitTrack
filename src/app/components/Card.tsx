import defaultImage from "./default-image.png";

interface MovieCardProps {
  title: string;
  overview: string;
  poster_path: string;
}

export default function Card({ title, overview, poster_path }: MovieCardProps) {
  const noPoster = defaultImage;
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : `${noPoster}`; // Corrección aquí

  return (
    <div className="bg-white rounded shadow p-4">
      <img className="w-full h-64 rounded mb-4" src={imageUrl} alt="Poster" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-500">{overview.substring(0, 150)}</p>
    </div>
  );
}
