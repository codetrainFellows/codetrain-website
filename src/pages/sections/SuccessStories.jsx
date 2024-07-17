import { Button } from "@nextui-org/react";
import CarouselCard from "../../components/CarouselCard";

// svg bg
import BgLogoRight from "../../assets/icons/BgLogoRight";
import BgLogoLeft from "../../assets/icons/BgLogoLeft";

const SuccessStories = () => {
  return (
    <section className="py-20 px-7 flex flex-col-reverse lg:gap-10 lg:flex-row items-center justify-center gap-4 relative">
      <div className="">
        <CarouselCard className="max-w-lg" />
        <Button className="rounded-none text-white bg-violet mt-10">
          Discover More Success Stories
        </Button>
      </div>
      <div className="">
        <div className="">
          <h3 className="text-violet font-bold text-3xl md:text-5xl max-w-xl">
            Success Stories From Codetrain Africa
          </h3>
          <p className="text-textColor max-w-sm mt-4">
            Lorem ipsum{" "}
            <span className="font-bold">dolor sit amet consectetur.</span>{" "}
            Mauris pellentesque porta donec enim tellus nibh adipiscing arcu. Et
            mi pellentesque lorem tellus eget nulla. Vulputate iaculis magnis
            aenean integer.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <CarouselCard className="max-w-lg md:max-w-xs mt-4" />
          <CarouselCard className="max-w-lg md:max-w-xs mt-4" />
        </div>
      </div>
      {/* svg bg logos */}
      <BgLogoRight className="fill-cyan-200 absolute top-10 lg:top-0 lg:right-0 -z-50 h-80 md:h-1/2 sm:inline" />
      <BgLogoLeft className="fill-cyan-400 absolute bottom-10 lg:bottom-0 lg:left-0 -z-50 h-80 lg:h-1/2 sm:inline" />
    </section>
  );
};

export default SuccessStories;
