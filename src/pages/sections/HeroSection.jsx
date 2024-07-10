import { Button } from "@nextui-org/react";

// Bg-logos
import img1 from "../../assets/SVG/Asset 21.svg";
import img2 from "../../assets/SVG/Asset 26.svg";
import lady from "../../assets/lady.png";

const HeroSection = () => {
  return (
    <div className="flex justify-start md:justify-center items-center min-h-[calc(100vh-60px)] relative px-4 md:px-10">
      <div className="text-violet font-semibold">
        <h1 className="text-2xl max-w-80 lg:max-w-3xl lg:text-4xl xl:max-w-3xl">
          Empowering Career Through Comprehensive Coding{" "}
          <br className="hidden lg:inline" /> Education
        </h1>
        <div className="md:ml-10">
          <ul className="list-disc text-textColor pl-4 sm:pl-0 mt-10 leading-normal ">
            <li>
              Lorem ipsum dolor sit amet consectetur. Volutpat quis morbi
              parturient justo.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur. Volutpat quis morbi
              parturient justo.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur. Volutpat quis morbi
              parturient justo.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur. Volutpat quis morbi
              parturient justo.
            </li>
          </ul>
          <div className="flex gap-x-4 mt-14 z-10">
            <Button className="bg-yellow text-violet font-bold px-5 sm:px-8 md:px-10 rounded-md">
              Enroll now
            </Button>
            <Button
              className="text-violet font-bold px-5 sm:px-8 md:px-10 rounded-md border-violet"
              variant="bordered"
            >
              Talk to admission
            </Button>
          </div>
          <p className="mt-12">
            *Next class for software engineering starts in December
          </p>
        </div>
      </div>
      <div className="relative hidden md:inline">
        <img src={lady} alt="" className="h-[700px] w-[700px]" />
        {/* bg logos */}
        {/* <img src={img1} alt="" className="absolute top-0 right-0 -z-50 h-1/2" />
        <img
          src={img2}
          alt=""
          className="absolute bottom-0 right-0 -z-50 h-72"
        /> */}
      </div>
      {/* bg logos */}
      <img
        src={img1}
        alt=""
        className="absolute top-0 right-0 -z-50 h-72 lg:h-1/2"
      />
      <img
        src={img2}
        alt=""
        className="absolute bottom-0 right-0 -z-50 h-72 lg:h-72 hidden sm:inline"
      />
    </div>
  );
};
export default HeroSection;
