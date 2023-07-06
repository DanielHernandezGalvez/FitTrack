import React from "react";

import Head from "next/head";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/SideBar";
import Body from "./components/Body";

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
      <Body />
    </div>
  );
}
