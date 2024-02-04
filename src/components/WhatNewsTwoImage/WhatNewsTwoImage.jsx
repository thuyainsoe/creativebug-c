import React from "react";
import Button from "@/components/Button";
// import style from "./style.module.scss";

const whatNewsTwoImage = [
  {
    id: 1,
    imageUrl:
      "https://www.creativebug.com/pimage/dynamic/videotile-450x390~storage/images/classseries_covers/126/aadeqbb6xdw68mbcwzno.jpg",
    name: "Daily Practice Series >",
  },
  {
    id: 2,
    imageUrl:
      "https://www.creativebug.com/pimage/dynamic/videotile-450x390~storage/public/images/tutorial_thumbnails/original/2027/j0gitr0djh6pbfaloaei.jpg",
    name: "New Releases // Lookbook >",
  },
];

const WhatNewsTwoImage = () => {
  return (
    <div className="mainContainer flex flex-col gap-5 items-center ">
      <p className="font-sans text-center text-[27px]">
        What's New At Creativebug
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-5">
        {whatNewsTwoImage.map((imageData) => (
          <div key={imageData.id}>
            <img src={imageData.imageUrl} alt="" />
            <p className="font-serif text-center mt-2 text-xl">
              {imageData.name}
            </p>
          </div>
        ))}
      </div>
      <Button
        label="Browse All Classes"
        className="border border-solid text-black border-black w-max hover:text-white hover:mainColorBg"
      />
    </div>
  );
};

export default WhatNewsTwoImage;
