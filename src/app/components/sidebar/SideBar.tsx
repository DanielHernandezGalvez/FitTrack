"use client";
import { useEffect, useState } from "react";
import { Collapse, initTE } from "tw-elements";
import MainCards from "./MainCards";
import MovieList from "./MovieList";

const Sidebar = () => {
  const [filter, setFilter] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [filterName, setFilterName] = useState("Popular Movies");

  const handleFilter = (newFilter: string, name: string) => {
    setFilter(newFilter);
    setFilterName(name);
  };

  useEffect(() => {
    initTE({ Collapse });
  }, []);

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div id="sidebar" className="w-1/4  bg-white">
        <h1 className="m-4 text-lg font-bold">{filterName}</h1>
        <div></div>
        <div id="accordion-container" className="p-3">
          <div id="accordionExample">
            <div className="rounded-[12px] shadow-md   bg-white  dark:bg-neutral-800">
              <h2 className="mb-0" id="headingOne">
                <button
                  className="group relative flex w-full items-center rounded-[10px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                  type="button"
                  data-te-collapse-init
                  data-te-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Sort
                  <span
                    className={`ml-auto h-5 w-5 shrink-0 rotate-${
                      isCollapsed ? "[-90deg]" : "[-180deg]"
                    } fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white`}
                    onClick={handleCollapseToggle}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="!visible"
                data-te-collapse-item
                data-te-collapse-show
                aria-labelledby="headingOne"
                data-te-parent="#accordionExample"
              >
                <div className="px-5 py-4">
                  <button onClick={() => handleFilter("upcoming", "Upcoming")}>
                    <b className="small-text">Upcoming</b>
                  </button>{" "}
                  <br />
                  <button
                    onClick={() => handleFilter("popular", "Popular Movies")}
                  >
                    <b className="small-text">Popular Movies</b>
                  </button>{" "}
                  <br />
                  <button
                    onClick={() => handleFilter("top_rated", "Top Rated")}
                  >
                    <b className="small-text"> Top Rated</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-10 mt-5">
        {filter === "" ? <MovieList /> : <MainCards filter={filter} />}
      </div>
    </>
  );
};

export default Sidebar;
