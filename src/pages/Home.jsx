import React from "react";
import Navbar from "./Navbar";
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <section id="home" className="h-screen w-auto bg-vine  ">
      <div>
        <Navbar />
        <div className="pb-40 md:pb-52 mt-10 flex flex-col justify-start md:justify-center gap-5 items-center md:items-start h-screen reem-kufi text-white md:text-black relative">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <h1 className="text-5xl md:text-6xl ">Let the Best </h1>
            <h1 className="text-5xl md:text-6xl pl-0 pr-0 md:pl-2 md:pr-2">
              and the
            </h1>
            <h1 className="text-5xl md:text-6xl ">Beast be One</h1>
          </div>
          <div className="hidden md:block">
            <h1 className="text-black text-sm md:text-xl w-full pl-4 pr-10">
              Transform your loving pet into a manstopper protection dog
            </h1>
            <Button variant="outline" className="text-black">Button</Button>
          </div>
        </div>
        <img
          src="/assets/a2.png"
          alt="dog"
          className="w-auto h-1/2 absolute top-[40%] right-0 md:right-[5%]"
        />
        <div className="flex flex-row justify-start absolute top-[70%]  md:hidden">
          <h1 className="text-black md:text-white text-sm w-full pl-4 pr-10">
            Transform your loving pet into a manstopper protection dog
          </h1>
          <div className="w-9/12"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
