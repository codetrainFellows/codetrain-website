import empact from "../../assets/images/empact.png";
import google from "../../assets/images/google.png";
import hubtel from "../../assets/images/hubtel.png";
import africanberlin from "../../assets/images/africanberlin.png";
import meqasa from "../../assets/images/meqasa.png";
import techpoint from "../../assets/images/techpoint.png";

const PartnersAndSupporters = () => {
  return (
    <section className="text-center py-12 px-10">
      <h1 className="text-xl text-violet font-semibold">
        Our Partners and Supporters
      </h1>
      <div className="grid place-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
        <img src={empact} alt="empact logo" className="w-44" />
        <img src={google} alt="google logo" className="w-44" />
        <img src={techpoint} alt="techpoint logo" className="w-44" />
        <img src={meqasa} alt="meqasa logo" className="w-44" />
        <img src={hubtel} alt="hubtel logo" className="w-44" />
        <img src={africanberlin} alt="africanberlin logo" className="w-44" />
      </div>
      <div className="grid place-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
        <img src={empact} alt="empact logo" className="w-44" />
        <img src={google} alt="google logo" className="w-44" />
        <img src={techpoint} alt="techpoint logo" className="w-44" />
        <img src={meqasa} alt="meqasa logo" className="w-44" />
        <img src={hubtel} alt="hubtel logo" className="w-44" />
        <img src={africanberlin} alt="africanberlin logo" className="w-44" />
      </div>
    </section>
  );
};
export default PartnersAndSupporters;
