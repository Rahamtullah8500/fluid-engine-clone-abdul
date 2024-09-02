import "./Home.css";
import courseVideo from "../../../public/videos/courses.mp4";
import SearchSection from "./components/searchSection/SearchSection";
import IntroSection from "./components/introSection/IntroSection";
import TemplateGroup from "./components/templatesGroup/TemplateGroup";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTemplates } from "../../store/slice/TemplateSlice";
import apiClient from "../../apiClient";
import BuildOwnSection from "../template/components/buildOwnSection/BuildOwnSection";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTemplates()
  }, []);

  const fetchTemplates = async () => {
    try {
      const response = await apiClient.get("/api/templates");
      dispatch(setTemplates(response.data));
      return response.data;
    } catch (error) {
      console.error("Error fetching templates list:", error);
      throw error;
    }
  };

  return (
    <>
      <div className=" my_container">
        <div className="home-container">
          <div className="home-text">
            <h1 className="home-title">Designed to Sell</h1>
            <p className="home-description">
              Get your free website trial today. No credit card required.
            </p>
            <Link to={"template"}>
              <button className=" home-button  ">GET STARTED</button>
            </Link>
          </div>

          <div className="home-video-container">
            <video
              className="home-video"
              autoPlay
              loop
              muted
              playsInline
              src={courseVideo}
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <SearchSection />
        <BuildOwnSection/>
      </div>
      <IntroSection />
      <TemplateGroup />
    </>
  );
};

export default Home;
