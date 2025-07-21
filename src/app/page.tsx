import React from "react";
import Profile from "./Profile";
import Project from "./Project";
import Experience from "./Experience";

export default function Home() {
  return (
    <div
      className="flex flex-col sm:flex-row min-w-full p-0 sm:p-4 gap-0 sm:gap-4 bg-transparent sm:items-center sm:justify-center"
    >
      <Profile />
      <Project />
      <Experience />
    </div>
  );
}
