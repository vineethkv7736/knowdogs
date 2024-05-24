import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <section id="home" className="h-screen w-auto bg-slate-800 hero-bg ">
      <div>
        <Navbar />
        <div className="pb-40 md:pb-52 pl-4 md:pl-0 flex flex-col justify-center gap-5 items-center h-screen reem-kufi text-white md:text-black">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <h1 className="text-5xl md:text-6xl ">Let the Best </h1>
            <h1 className="text-5xl md:text-6xl pl-0 pr-0 md:pl-2 md:pr-2">
              and the
            </h1>
            <h1 className="text-5xl md:text-6xl ">Beast be One</h1>
          </div>
          <h1 className="text-black md:text-white text-xs">
            Transform your loving pet into a manstopper protection dog
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
