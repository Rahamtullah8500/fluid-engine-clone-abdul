import { Link } from "react-router-dom";
import "./BuildOwnSection.css";
import buildOwnImg from '../../../../../public/images/build-own-img.webp'

const BuildOwnSection = () => {
  return (
    <div className="build-own-container">
      <div className="build-own-left">
        <h1 className="home-title">Build your own template</h1>
        <p className="home-description">
          Choose from expertly curated colors, fonts, and page layouts to create
          a website template that matches your vision with Squarespace Blueprint
          AI.
        </p>
       <Link to={'/websiteBuilder'}> <button className="home-button home-btn-white">Get Started</button></Link>
      </div>
      <div className="build-own-right">
        <img
          src={buildOwnImg}
          alt="Template"
          className="build-own-full-image"
        />
      </div>
    </div>
  );
};

export default BuildOwnSection;
