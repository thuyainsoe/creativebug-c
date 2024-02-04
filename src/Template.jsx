import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
const Template = () => {
  return (
    <section>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Template;
