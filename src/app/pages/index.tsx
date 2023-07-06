import React from "react";

import Head from "next/head";
import { MovieSearch } from "../components/MovieSearch";
import NavBar from "../components/navbar/NavBar";
import Sidebar from "../components/sidebar/SideBar";

export const Home = () => {
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
      <div className="flex">
        <div className="w-1/4 bg-gray-200">Columna 1</div>
        <div className="flex-1 bg-gray-400">
          {" "}
          <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Hola mundo</h1>
            <MovieSearch />
          </main>
        </div>
      </div>
    </div>
  );
};
