import Navbar from "@/components/Custom/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      <div className="w-full">
        <div className=" grid grid-cols-2 p-2 border-b-2 mx-4 border-slate-400">
          <div className="text-5xl p-10 font-mono">
            Work for yourself and get paid in Crypto!
          </div>
          <div className="flex justify-center items-center">
            <Button className="bg-blue-600 text-lg font-mono w-1/2">Register</Button>
            
          </div>
        </div>
        <div>
            
        </div>
        <div className="grid grid-cols-2 p-2 mx-4">
            <span className="text-5xl font-mono flex items-center justify-center p-10 ">
                Work from Home and choose your freedom!
            </span>
            <div className="flex justify-center  space-x-5 items-center">
            <Button className="bg-slate-600 text-lg font-mono w-1/2">
              See for yourself
            </Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
