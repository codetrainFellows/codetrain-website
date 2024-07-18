import { Button, Image } from "@nextui-org/react";
import CTLogo from "../../assets/icons/CTLogo";

const CaseStudies = () => {
  return (
    <div className="py-20 px-4">
      <div className="text-center relative z-10">
        <h3 className="text-3xl md:text-5xl text-violet font-bold">
          Some Codetrain Case Studies
        </h3>
        <p className="text-textColor max-w-5xl mx-auto mt-10">
          Lorem ipsum dolor sit amet consectetur. Felis eu euismod placerat
          libero lacus eu morbi. Quam ullamcorper adipiscing eget porttitor
          vitae eget aliquam imperdiet. Sagittis nunc vulputate magna eu sed et.
          Aenean commodo amet amet lacinia amet porttitor diam.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-10 py-10 bg-contain bg-center bg-no-repeat relative">
        <CTLogo
          className="absolute max-w-xl lg:max-w-4xl object-cover text-[#e0e0e0]  lg:right-0"
          color="#c2c0c0"
        />

        <div className="max-w-[540px] bg-white relative z-10 shadow-md">
          <Image
            src="https://images.pexels.com/photos/11558845/pexels-photo-11558845.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            className="h-[350px] md:h-[540px] w-[540px] rounded-none"
          />
          <div className="text-textColor p-4">
            <p className="font-semibold text-xl">
              Inspiring story of how Ama started her journey in tech and is now
              a software engineer
            </p>
          </div>
        </div>
        <div className="relative z-10 text-textColor">
          <p className="max-w-lg mt-4 leading-8 text-lg">
            <span className="font-bold">Background:</span> Our bootcamp
            partnered with the Ashesi Venture Incubator to help young
            entrepreneurs develop their tech solutions.
          </p>
          <p className="max-w-lg mt-4 leading-8 text-lg">
            <span className="font-bold">Challenge:</span> Entrepreneurs needed
            technical expertise to turn their innovative ideas into viable
            products but lacked the coding skills to do so.
          </p>
          <p className="max-w-lg mt-4 leading-8 text-lg">
            <span className="font-bold">Solution: </span>CodeTrain students
            collaborated with these entrepreneurs, providing technical guidance
            and developing prototypes using the latest technologies.
          </p>
          <p className="max-w-lg mt-4 leading-8 text-lg">
            <span className="font-bold">Outcome: </span>
            Several startups successfully launched their products, received
            funding, and grew their businesses, thanks to the tech support from
            CodeTrain students.
          </p>
          <p className="font-bold mt-6">Key Takeaways:</p>
          <ul className="list-disc leading-10 text-lg">
            <li>
              Partnerships with incubators create real-world project
              opportunities
            </li>
            <li>
              Students gain practical experience while contributing to
              entrepreneurial success
            </li>
            <li>
              Collaborative projects foster innovation and community impact
            </li>
          </ul>
          <Button className="rounded-none text-white bg-violet mt-6">
            Discover More Case Studies
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CaseStudies;
