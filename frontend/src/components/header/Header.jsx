import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { userSignOut } from "../../store/slice/UserSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const userInfo = useSelector((state) => state.UserSlice.userInfo);
  const dispatch  = useDispatch()

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const signoutHandler = () => {
    dispatch(userSignOut());
    localStorage.removeItem("userInfo");
  };

  return (
    <nav
      className={`text-blue-950 font-semibold navbar ${
        scrolling ? "scrolled" : ""
      }`}
    >
      <div className="navbar-container my_container">
        <h1 className="logo">MyLogo</h1>
        <div className="toggle-button" onClick={toggleNavbar}>
          {isOpen ? <IoCloseSharp /> : <FaBars />}
        </div>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/template" ? "active" : ""}>
            <Link to="/template">Template</Link>
          </li>
          <li className={location.pathname === "/auth" ? "active" : ""}>
            {userInfo ? (
              <Link to={"/auth"} onClick={signoutHandler}>Logout</Link>
            ) : (
              <Link to="/auth">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
