import Header from "@/components/Header";
import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      
      <div className=" bg-background w-full py-10 mx-auto pt-20 flex flex-col items-center">
        <ul className="w-[80%] lg:w-[15%] flex justify-evenly">
          <li>
            <Link
              to="https://github.com/MonojitD"
              className="hover:text-primary"
            >
              <Github />
            </Link>
          </li>
          <li>
            <Link
              to="https://twitter.com/monojitdeb1"
              className="hover:text-primary"
            >
              <Twitter />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/monojitdeb"
              className="hover:text-primary"
            >
              <Linkedin />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppLayout;
