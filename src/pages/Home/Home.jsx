import HomeHero from "@/components/HomeHero";
import ThreeColumnSlider from "@/components/ThreeColumnSlider";
import WhatNewsTwoImage from "@/components/WhatNewsTwoImage";
import FullWidthImageBanner from "@/components/FullWidthImageBanner";

const Home = () => {
  return (
    <section className="flex flex-col gap-28">
      <HomeHero />
      <ThreeColumnSlider />
      <WhatNewsTwoImage />
      <ThreeColumnSlider />
      <FullWidthImageBanner />
    </section>
  );
};

export default Home;
