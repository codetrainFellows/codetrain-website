import CTLogo from "../../assets/icons/CTLogo";

const EarnBackYourTuition = () => {
  return (
    <section className="mt-20 bg-ash">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-10 py-36 bg-contain bg-center bg-no-repeat relative">
        <CTLogo
          className="absolute max-w-3xl object-cover text-[#e0e0e0]"
          color="#c2c0c0"
        />
        <div className="relative z-10">
          <h1 className="font-bold text-violet text-4xl">
            EARN BACK YOUR TUITION
          </h1>
          <p className="max-w-lg mt-4 text-textColor leading-8 text-lg">
            Lorem ipsum dolor sit amet consectetur. Felis eu euismod placerat
            libero lacus eu morbi. Quam ullamcorper adipiscing eget porttitor
            vitae eget aliquam imperdiet. Sagittis nunc vulputate magna eu sed
            et. Aenean commodo amet amet lacinia amet porttitor diam. Sagittis
            nunc ultricies felis at amet nibh euismod. Natoque donec elementum
            diam nascetur nibh volutpat volutpat pretium dui. Tincidunt magna
            auctor eget ut egestas lectus fermentum sodales. Congue feugiat
            tortor velit amet risus at eget at. Cras enim dolor pellentesque
            pulvinar.
          </p>
        </div>
        <div className="max-w-[540px] bg-white relative z-10">
          <iframe
            className="w-full h-52 sm:h-72 md:max-w-[540px] md:h-[376px]"
            // width="540"
            // height="376"
            src="https://www.youtube.com/embed/SmAZJcErw7w?si=Rnyh2RAAkl1W1Ech"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="text-textColor p-4">
            <p className="font-semibold text-xl">
              Inspiring story of how Ama started her journey in tech and is now
              a software engineer
            </p>
            <hr className="border-violet h-1 my-6" />
            <p>Software Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EarnBackYourTuition;
