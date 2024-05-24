import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavList from "./Navlist";

const Navbar = () => {
  return (
    <div className="h-14 w-auto p-4 pt-8 flex flex-row items-center justify-between ">
      <div>
        <h1 className="text-black cinzel text-4xl md:text-4xl">KnowDogs</h1>
      </div>
      <div className="hidden md:block">
      <div className="flex flex-row justify-end gap-20 pr-20 text-black md:w-full items-center text-xl ">
        <NavList/>
      </div>
      </div>
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-300 ">
            <SheetHeader>
              <SheetTitle className="text-black cinzel text-4xl md:text-4xl">KnowDogs</SheetTitle>
              <SheetDescription>
              
              <NavList />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
