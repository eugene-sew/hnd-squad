import { logo } from "../assets";
import { RiMessage3Fill } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <nav className="flex justify-between px-5 items-center">
        <button className="">
          <FaUserSecret className="h-10 w-10 hover:text-cta" />
        </button>
        <div>
          <img
            src={logo}
            alt="logo"
            className="w-16"
          />
        </div>
        <button className="">
          <RiMessage3Fill className="h-10 w-10 hover:text-cta" />
        </button>
      </nav>
      <div className="px-4 mt-3">
        <section className="py-5 px-4 bg-gray-100 h-screen overflow-hidden overflow-y-scroll rounded-3xl content">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
