const Stats = () => {
  return (
    <div className="p-4 sm:px-14 sm:py-28 text-center">
      <h1 className="font-bold text-violet text-3xl lg:text-5xl">
        Codetrain Development Statistics
      </h1>
      <p className="my-10 max-w-6xl mx-auto">
        Lorem ipsum dolor sit amet consectetur. Mauris pellentesque porta donec
        enim tellus nibh adipiscing arcu. Et mi pellentesque lorem tellus eget
        nulla. Vulputate iaculis magnis aenean integer. Ultrices id aliquet
        elementum id elit quis lectus rutrum nec..
      </p>

      <div className="flex flex-col items-center justify-center md:items-start md:flex-row gap-x-10 ">
        <div className="max-w-72">
          <h1 className="text-pink text-7xl font-bold md:text-9xl">89%</h1>
          <p className="text-textColor mt-6">
            <span className="font-bold">Job Placement:</span> of our students
            get job within the first 9 months
          </p>
        </div>
        <div className="max-w-72 mt-5 md:mt-0">
          <h1 className="text-pink text-6xl font-bold md:text-9xl">600</h1>
          <p className="text-textColor mt-6">
            <span className="font-bold">Alumni:</span> alumni and counting
          </p>
        </div>
        <div className="max-w-72 mt-5 md:mt-0">
          <h1 className="text-pink text-6xl font-bold md:text-9xl">8.3</h1>
          <p className="text-textColor mt-6">
            <span className="font-bold">Ratings:</span> of our students get job
            within the first 9 months
          </p>
        </div>
      </div>
    </div>
  );
};
export default Stats;
