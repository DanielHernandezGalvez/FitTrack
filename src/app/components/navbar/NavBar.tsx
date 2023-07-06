import React from "react";
import Image from "next/image";
import logo from "/public/TMDB.svg";

export default function NavBar() {
  return (
    <nav className="bg-primary text-white py-5">
      <div className="container mx-auto flex justify-between items-center max-w-7xl ">
        <div className="flex justify-center">
          <a className="text-xl mx-6 my-auto font-bold" href="#">
            <Image src={logo.src} alt="TMDB Logo" width={155} height={50} />
          </a>
          <div className="space-x-4">
            <a className="hover:text-gray-300" href="#">
              Movies
            </a>
            <a className="hover:text-gray-300" href="#">
              TV Shows
            </a>
            <a className="hover:text-gray-300" href="#">
              People
            </a>
            <a className="hover:text-gray-300" href="#">
              More
            </a>
          </div>
        </div>
        <div className="space-x-4">
          <a className="hover:text-gray-300" href="#">
            +
          </a>
          <a className="hover:text-gray-300 language" href="#">
            EN
          </a>
          <a className="hover:text-gray-300" href="#">
            Login
          </a>
          <a className="hover:text-gray-300 pe-5" href="#">
            Join TMB
          </a>
        </div>
      </div>
    </nav>
  );
}
