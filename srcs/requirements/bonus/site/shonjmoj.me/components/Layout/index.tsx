import { ReactNode } from "react";
import Navbar from "../common/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container h-full py-2 px-6 lg:py-4 lg:px-8 2xl:py-8 2xl:px-10">
      <Navbar />
      <div className="flex py-12 lg:py-6 lg:px-8 2xl:py-10 2xl:px-12 justify-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
