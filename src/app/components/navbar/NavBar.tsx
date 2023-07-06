import React from "react";
import Image from "next/image";
import logo from "/public/TMDB.svg";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBar() {
  return (
    <nav className="bg-primary text-white py-5 px-4">
      <div className="container mx-auto flex justify-between items-center max-w-7xl ">
        <div className="flex justify-center">
          <a className="text-xl mx-6 my-auto font-bold" href="#">
            <Image src={logo.src} alt="TMDB Logo" width={155} height={50} />
          </a>
          <div className="space-x-4 flex-wrap">
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
        <div className="space-x-8 flex py-auto">
          <a className="hover:text-gray-300" href="#">
            <FontAwesomeIcon icon={faPlus} width={18} />
          </a>
          <a className="hover:text-gray-300 language" href="#">
            EN
          </a>
          <a className="hover:text-gray-300" href="#">
            Login
          </a>
          <a className="hover:text-gray-300" href="#">
            Join TMB
          </a>
          <a className="hover:text-gray-300 pyauto pe-5" href="#">
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: "#01B6E6" }}
              width={20}
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
