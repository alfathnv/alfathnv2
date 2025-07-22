import React from "react";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 min-h-screen">
      <Profile />
      <Project />
      <Experience />
    </div>
  );
}
