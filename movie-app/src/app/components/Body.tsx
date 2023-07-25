import React from "react";
import Sidebar from "./sidebar/SideBar";

export default function Body() {
  return (
    <div>
      <div className="flex pt-10">
        <Sidebar />
      </div>
    </div>
  );
}
