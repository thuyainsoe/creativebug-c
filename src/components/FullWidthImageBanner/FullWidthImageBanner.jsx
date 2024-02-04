import React from "react";
import FullWidthBanner from "@/assets/FullWidthBanner.jpg";
import Button from "@/components/Button";

const FullWidthImageBanner = () => {
  return (
    <div
      className="w-full h-[513px] flex justify-end items-center lg:pr-20"
      style={{
        backgroundImage: `url(${FullWidthBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full xl:w-[40%] lg:w-[50%] flex flex-col justify-center items-center gap-3">
        <h1 className="text-[50px] text-slate-700">
          Home of the Daily Practice
        </h1>
        <p className="font-serif text-center text-xl">
          Staying committed to your craft can be hard. Our month-long courses
          are designed to help you stay engaged, every single day.
        </p>
        <Button
          label="Browse Classes"
          className="text-black border border-solid border-black hover:mainColorBg hover:text-white hover:border-none mt-[15px]"
        />
      </div>
    </div>
  );
};

export default FullWidthImageBanner;
