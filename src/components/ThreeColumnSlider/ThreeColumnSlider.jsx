import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@/components/Button";
// import style from "./style.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const sliderData = [
  {
    id: 1,
    imageUrl:
      "https://www.creativebug.com/ui/images/home/category_carousel_350x197_art.jpg",
    name: "Art + Design",
  },
  {
    id: 2,
    imageUrl:
      "https://www.creativebug.com/ui/images/home/category_carousel_350x197_sewing.jpg",
    name: "Sewing",
  },
  {
    id: 3,
    imageUrl:
      "https://www.creativebug.com/ui/images/home/category_carousel_350x197_quilt.jpg",
    name: "Quilting",
  },
  {
    id: 4,
    imageUrl:
      "https://www.creativebug.com/ui/images/home/category_carousel_350x197_paper.jpg",
    name: "Paper",
  },
  {
    id: 5,
    imageUrl:
      "https://www.creativebug.com/ui/images/home/category_carousel_350x197_knit.jpg",
    name: "Knitting",
  },
  {
    id: 6,
    imageUrl:
      "https://www.creativebug.com/ui/images/home/category_carousel_350x197_crochet.jpg",
    name: "Crochet",
  },
  {
    id: 7,
    imageUrl:
      "https://www.creativebug.com/ui/images/home/category_carousel_350x197_home.jpg",
    name: "Food + Home",
  },
];

const ThreeColumnSlider = () => {
  return (
    <div className="mainContainer h-[300px] gap-5 flex flex-col">
      <div className="flex justify-between">
        <p className="font-sans text-xl">What do you want to make today?</p>
        <Button
          label="View All"
          className="border border-solid text-black border-black bg-white hover:mainColorBg hover:text-white"
        />
      </div>
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {sliderData.map((slider) => (
            <SwiperSlide key={slider.id}>
              <div className="h-60 bg-green-500">
                <img src={slider.imageUrl} alt="" className="w-full h-full" />
              </div>
              <p className="font-serif text-center py-2">{slider.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ThreeColumnSlider;
