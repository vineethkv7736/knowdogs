import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SocialIcon } from "react-social-icons";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-auto bg-gradient-to-b from-vine from-40% via-vine2 via-10% to-white to-90%"
    >
      <div className=" flex  min-h-screen flex-col p-4">
        <div className="text-white font-serif text-4xl md:text-5xl mt-4 text-opacity-70 flex justify-center w-full  md:justify-start">
          <h1>Our Training</h1>
        </div>
        <h2 className="text-white mt-10">
          Welcome to <span className="text-white font-bold">KnowDogs</span> Your
          Ultimate training center
        </h2>
        <h1 className="text-white my-10 text-2xl">Meet Our Trainer</h1>

        <Card className="block md:hidden bg-slate-300 mx-10 ">
          <CardHeader>
            <img
              src="/assets/hari.jpg"
              alt="Image"
              className="rounded-md object-cover w-auto h-48"
            />
            <CardTitle>Hari Krishnan</CardTitle>
            <CardDescription>Professional trainer/Owner </CardDescription>
          </CardHeader>
          <CardContent className="text-xs">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex flex-row justify-evenly w-full">
              <SocialIcon
                network="instagram"
                url="https://www.instagram.com/hari_crishnan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                //   bgColor="rgb(157 23 77)"
                //   fgColor="white"
                style={{ width: "30px", height: "30px" }}
              />
              <SocialIcon
                network="whatsapp"
                url=""
                //   bgColor="rgb(157 23 77)"
                //   fgColor="white"
                style={{ width: "30px", height: "30px" }}
              />
              <SocialIcon
                network="facebook"
                url="https://www.facebook.com/harikrishnan.packleader?mibextid=ZbWKwL"
                //   bgColor="rgb(157 23 77)"
                //   fgColor="white"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </CardFooter>
        </Card>

        <div className=" hidden md:block text-white">
          <div className="flex flex-row justify-evenly items-center">
            <img
              src="/assets/hari.jpg"
              alt="Image"
              className="rounded-md object-cover"
            />
            <div className="w-48 h-auto flex flex-col  ">
              <h1 className="text-3xl pb-0.5 ">Hari Krishnan</h1>
              <p className="text-sm  text-opacity-20">
                Professional trainer/Owner
              </p>
              <p className="text-sm py-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>

              <div className="flex flex-row justify-evenly w-full">
                <SocialIcon
                  network="instagram"
                  url="https://www.instagram.com/hari_crishnan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  //   bgColor="rgb(157 23 77)"
                  //   fgColor="white"
                  style={{ width: "40px", height: "40px" }}
                />
                <SocialIcon
                  network="whatsapp"
                  url=""
                  //   bgColor="rgb(157 23 77)"
                  //   fgColor="white"
                  style={{ width: "40px", height: "40px" }}
                />
                <SocialIcon
                  network="facebook"
                  url="https://www.facebook.com/harikrishnan.packleader?mibextid=ZbWKwL"
                  //   bgColor="rgb(157 23 77)"
                  //   fgColor="white"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
