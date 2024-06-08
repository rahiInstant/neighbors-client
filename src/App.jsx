import { Outlet } from "react-router-dom";
import Navbar from "./components/Public/Navbar";
import Footer from "./components/Public/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;