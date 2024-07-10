import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      {/* <Footer /> */}
      {/* <div className="xl:container mx-auto bg-red-200"></div> */}
    </>
  );
};
export default RootLayout;
