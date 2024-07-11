import { Button } from "@nextui-org/react";

// Icons
import computer from "../../assets/SVG/Computer.svg";
import pen from "../../assets/SVG/Pen.svg";

// Bg-logos
import img1 from "../../assets/SVG/Asset 23.svg";
import img2 from "../../assets/SVG/Asset 28.svg";

const Courses = () => {
  return (
    <div className="bg-lightBlue min-h-[calc(100vh-60px)] text-center flex flex-col justify-center py-24 px-4 relative">
      <h1 className="font-bold text-violet text-3xl lg:text-5xl">
        Our Courses
      </h1>
      <p className="my-10 max-w-6xl mx-auto">
        Lorem ipsum{" "}
        <span className="font-bold text-textColor">
          dolor sit amet consectetur
        </span>
        . Mauris pellentesque porta donec enim tellus nibh adipiscing arcu. Et
        mi
      </p>

      <div className="flex flex-col gap-10 md:flex-row justify-center items-center">
        <div className="text-start bg-white max-w-sm relative grid place-content-center px-6 py-14">
          <img
            src={computer}
            className="w-12 absolute -top-6 left-8 text-violet "
            alt=""
          />
          <h3 className="text-violet font-bold text-2xl">Software Engineer</h3>
          <p className="mt-4 text-textColor text-lg">
            2-Year Program: Transforming Novices into Mid-Level Developers. Year
            1: Intensive Software Development Training. Year 2: Career Services
            Including Interview Prep, Workshops, Challenges, and Internships.
          </p>
          <div className="">
            <Button className="rounded-sm font-bold bg-yellow mt-6 px-8">
              Enroll now
            </Button>
          </div>
        </div>
        <div className="text-start bg-white max-w-sm relative grid place-content-center px-6 py-14">
          <img
            src={pen}
            className="w-12 absolute -top-6 left-8 text-violet "
            alt=""
          />
          <h3 className="text-violet font-bold text-2xl">UI/UX Designer</h3>
          <p className="mt-4 text-textColor text-lg">
            2-Year Program: Transforming Novices into Mid-Level Developers. Year
            1: Intensive Software Development Training. Year 2: Career Services
            Including Interview Prep, Workshops, Challenges, and Internships.
          </p>
          <div className="">
            <Button className="rounded-sm font-bold bg-yellow mt-6 px-8">
              Enroll now
            </Button>
          </div>
        </div>
      </div>

      {/* Bg icons */}
      <img
        src={img1}
        alt=""
        className="absolute top-0 left-0 -z-50 h-72 lg:h-1/2"
      />
      <img
        src={img2}
        alt=""
        className="absolute bottom-0 right-0 -z-50 h-72 lg:h-72 hidden sm:inline"
      />
    </div>
  );
};
export default Courses;
