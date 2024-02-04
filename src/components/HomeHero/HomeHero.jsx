import Button from "@/components/Button/Button";
import style from "./style.module.scss";

const HomeHero = () => {
  return (
    <div className={style.videoBackground}>
      <video autoPlay loop muted className={style.video}>
        <source
          src="https://videos-cloudfront.jwpsrv.com/65bf5139_1c140cd8db70254a424e85cab0051be44015250c/content/conversions/vAMD8l7c/videos/5tY1elWS-22821033.mp4"
          type="video/mp4"
        />
      </video>
      <div className="flex flex-col justify-center items-center h-full gap-3">
        <h1 className="text-[54px] uppercase text-[white]">
          Find Your Creative Bliss
        </h1>
        <p className="text-[30px] text-[white]">
          Learn Something new everyday at Creativebug
        </p>
        <Button label="Start free trial" className="mainColorBg text-white" />
      </div>
    </div>
  );
};

export default HomeHero;
