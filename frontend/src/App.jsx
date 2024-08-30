import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className=" home-body">
      <Header />
      <div>
        <Outlet/>
      </div>
      <Footer />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
