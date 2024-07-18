import { Image } from "@nextui-org/react";
import BgLogoRight from "../../assets/icons/BgLogoRight";
import BgLogoLeft from "../../assets/icons/BgLogoLeft";

const ExperienceCard = ({ className, img, title, text }) => {
  return (
    <div
      className={`flex flex-col items-center gap-x-9 relative z-10 ${className}`}
    >
      <div className="max-w-md">
        <Image src={img} className="rounded-none" />
      </div>
      <div className="mt-10 lg:mt-0 max-w-md">
        <h3 className="text-violet text-4xl max-w-sm">{title}</h3>
        <p className="max-w-md text-xl text-textColor tracking-wide mt-6">
          {text}
        </p>
      </div>
    </div>
  );
};

const CTExperience = () => {
  return (
    <div className="py-20 px-4 bg-ash relative">
      <div className="text-center">
        <h3 className="text-2xl md:text-4xl text-violet font-semibold">
          Codetrain Experience
        </h3>
        <p className="max-w-4xl mt-7 mx-auto text-xl text-textColor tracking-widest">
          Unlike traditional education models, our curriculum is constantly
          updated to reflect the latest trends and demands of the tech industry.
        </p>
      </div>
      <div className="flex flex-col gap-14 items-center mt-10">
        <ExperienceCard
          img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          title="Kick-off Event"
          text="Our coding bootcamp offers personalized learning paths designed to cater to the diverse needs and aspirations of each student, ensuring that they receive the support and guidance needed to succeed in their journey towards becoming proficient developers or designers"
          className="lg:flex-row"
        />
        <ExperienceCard
          img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          title="In-Person Class On Weekdays/Weekends"
          text="Unlike traditional education models, our curriculum is constantly updated to reflect the latest trends and demands of the tech industry. By staying ahead of the curve, we equip our students with the relevant skills and knowledge needed to thrive in today's competitive job market"
          className="lg:flex-row-reverse"
        />
        <ExperienceCard
          img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          title="Online Class"
          text="We prioritize not only technical proficiency but also soft skills development, career readiness, and personal growth. Our comprehensive approach ensures that graduates are not only adept coders but also effective communicators, problem-solvers, and leaders in their field."
          className="lg:flex-row"
        />
        <ExperienceCard
          img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          title="Mixers"
          text="We prioritize not only technical proficiency but also soft skills development, career readiness, and personal growth. Our comprehensive approach ensures that graduates are not only adept coders but also effective communicators, problem-solvers, and leaders in their field."
          className="lg:flex-row-reverse"
        />
        <ExperienceCard
          img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          title="One-on-One Teaching Assistance"
          text="We prioritize not only technical proficiency but also soft skills development, career readiness, and personal growth. Our comprehensive approach ensures that graduates are not only adept coders but also effective communicators, problem-solvers, and leaders in their field."
          className="lg:flex-row"
        />
        <ExperienceCard
          img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          title="Group Projects"
          text="We prioritize not only technical proficiency but also soft skills development, career readiness, and personal growth. Our comprehensive approach ensures that graduates are not only adept coders but also effective communicators, problem-solvers, and leaders in their field."
          className="lg:flex-row-reverse"
        />
        <ExperienceCard
          img="https://images.pexels.com/photos/27057568/pexels-photo-27057568/free-photo-of-a-group-of-seagulls-sitting-on-top-of-an-iceberg.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          title="Demo-Day"
          text="We prioritize not only technical proficiency but also soft skills development, career readiness, and personal growth. Our comprehensive approach ensures that graduates are not only adept coders but also effective communicators, problem-solvers, and leaders in their field."
          className="lg:flex-row"
        />
      </div>
      {/* svg bg logos */}
      <BgLogoLeft className="fill-rose-300 absolute h-96 top-96 right-28 lg:top-56 lg:right-56 sm:inline" />
      <BgLogoLeft className="fill-rose-300 absolute h-96 bottom-[669px] left-5 lg:bottom-56 lg:left-56 sm:inline" />
      <BgLogoRight className="fill-rose-300 absolute h-96 bottom-20 right-28 lg:bottom-[669px] lg:right-40 sm:inline" />
    </div>
  );
};

export default CTExperience;
