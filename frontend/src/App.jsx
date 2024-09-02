import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation()
  return (
    <div className=" home-body">
      <Header />
      <div>
        <Outlet/>
      </div>
    {location.pathname === '/websiteBuilder' ? null :   <Footer />}
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
