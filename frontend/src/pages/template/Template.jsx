import "./Template.css";
import '../home/Home.css/'
import invoiceVideo from "../../../public/videos/invoice.mp4";
import PopularSection from "./components/popularSection/PopularSection";
import LatestSection from "./components/latestSection/LatestSection";
import BuildOwnSection from "./components/buildOwnSection/BuildOwnSection";
import CustomTemplates from "./components/customTemplates/CustomTemplates";

const Template = () => {

  return (
    <div className=" my_container">
      <div className="home-container">
        <div className="home-text">
          <h1 className="home-title">Make any template yours with ease.</h1>
          <p className="home-description">
            Whether you need a portfolio website, an online store, or a personal
            blog, you can use Squarespace customizable and responsive website
            templates to get started.
          </p>
        </div>

        <div className="home-video-container">
          <video
            className="home-video"
            autoPlay
            loop
            muted
            playsInline
            src={invoiceVideo}
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <BuildOwnSection/>
      <CustomTemplates/>
      <PopularSection />
      <LatestSection />
    </div>
  );
};

export default Template;
