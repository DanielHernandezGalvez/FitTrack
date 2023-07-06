import Head from "next/head";
import { MovieSearch } from "./components/MovieSearch";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/SideBar";

export default function Home() {
  return (
    <div className=" min-h-screen">
      <Head>
        <title>The Movie Database (TMDB)</title>
        <meta
          name="description"
          content="The Movie Database (TMDB) is a popular, user editable database for movies and TV shows."
        />
      </Head>
      <NavBar />
      <Sidebar />
      <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Hola mundo</h1>
        <MovieSearch />
      </main>
    </div>
  );
}
