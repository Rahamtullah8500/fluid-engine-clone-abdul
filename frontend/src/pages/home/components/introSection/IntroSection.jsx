import "./IntroSection.css";
import introVideo from "../../../../../public/videos/intro.mp4";

const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="intro-container my_container">
        <div className="intro-video-container">
          <video
            className="intro-video"
            autoPlay
            loop
            muted
            playsInline
            src={introVideo}
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="intro-text">
          <div className="intro-item">
            <div className="intro-section-title">Create a website</div>
            <p className="intro-section-description">
              Choose from any of our industry-leading website templates,
              designer fonts, and color palettes.
            </p>
          </div>
          <div className="intro-item">
            <div className="intro-section-title">
              Sell your products and services
            </div>
            <p className="intro-section-description">
              Set up an ecommerce store, book appointments, or sell your
              skills—all on a single platform built just for you.
            </p>
          </div>
          <div className="intro-item">
            <div className="intro-section-title">Market your business</div>
            <p className="intro-section-description">
              On-brand email campaigns and social tools make it easy to retain
              customers and grow your base.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
