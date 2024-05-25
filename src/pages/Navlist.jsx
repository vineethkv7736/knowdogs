import React, { useState } from "react";

const NavList = () => {

  const [isActive,setIsActive] = useState(0);
  const list = [
    {
      label: "Home",
      route: "#home",
    },
    {
      label: "About",
      route: "#about",
    },
    {
      label: "Services",
      route: "#services",
    },
    {
      label: "Contact",
      route: "#contact",
    },
  ];
  return (
    <ul className="flex flex-col md:flex-row gap-4 text-white ">
      {list.map((obj, key) => {
        return (
          <li
            key={key}
            className={`text-lg p-2 hover:cursor-pointer ${
              (isActive === key) &&
              "bg-gray-600 bg-opacity-10 md:bg-transparent md:border-b-4 md:border-red-400"
            }`}
          >
            <a onClick={()=>setIsActive(key)} href={obj.route}>{obj.label}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;