import React from "react";
import { MovieSearch } from "../components/MovieSearch";
import Sidebar from "./sidebar/SideBar";
import MainCards from "./sidebar/MainCards";

export default function Body() {
  return (
    <div>
      {" "}
      <div className="flex">
        <Sidebar />
      </div>
    </div>
  );
}
