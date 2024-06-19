import { Outlet } from "react-router-dom";
import Navbar from "./components/Public/Navbar";
import Footer from "./components/Public/Footer";
import { useQueryClient } from "@tanstack/react-query";

const App = () => {


  return (
    <div className="font-poppins">
      <Navbar/>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
