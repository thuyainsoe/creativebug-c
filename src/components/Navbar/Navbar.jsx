import { FaSearch } from "react-icons/fa";
import Button from "@/components/Button";
import NavbarMenu from "@/components/NavbarMenu";

const Navbar = () => {
  return (
    <nav className="mainContainer flex flex-col h-[140px] py-5 justify-center gap-1 items-center sticky top-0 bg-white z-50">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-6">
          <h2 className="mainColorText text-[40px] font-bold uppercase">
            CreativeBug
          </h2>
          <NavbarMenu />
        </div>
        <div className="flex items-center gap-1 text-sm uppercase font-semibold">
          <Button label="Start free trial" className="mainColorBg text-white" />
          <Button label="Login" className="bg-gray-600 text-white" />
        </div>
      </div>
      <div className="flex gap-0.5">
        <input
          type="text"
          className=" font-serif border border-black rounded-sm px-1.5 focus:outline-none text-sm w-[380px] h-9"
          placeholder="Search"
        />
        <button className="mainColorBg text-[white] py-1.5 px-4 rounded-tr rounded-br">
          <FaSearch />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
