import { useEffect, useState } from "react";
import "./TemplateGroup.css";
import legzington from "../../../../../public/images/lexington.webp";
import klipsan from "../../../../../public/images/klipsan.webp";
import reseda from "../../../../../public/images/reseda.webp";
import clove from "../../../../../public/images/clove.webp";
import ortiz from "../../../../../public/images/ortiz.webp";
import forma from "../../../../../public/images/forma.webp";
import meriden from "../../../../../public/images/meriden.webp";
import belisa from "../../../../../public/images/belisa.webp";

const tabDataOriginal = [
  { id: 1, tabName: "Online Store", tabImg: legzington },
  { id: 2, tabName: "Local Business", tabImg: klipsan },
  { id: 3, tabName: "Portfolio", tabImg: reseda },
  { id: 4, tabName: "Restaurant", tabImg: belisa },
  { id: 5, tabName: "Services", tabImg: clove },
  { id: 6, tabName: "Personal & CV", tabImg: ortiz },
  { id: 7, tabName: "Courses", tabImg: forma },
  { id: 8, tabName: "Memberships", tabImg: meriden },
];

const TemplateGroup = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [tabData,setTabData] = useState(tabDataOriginal)

  useEffect(() => {
    const intervalId = setInterval(() => {  
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tabData.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const handleTabClick = (index) => {
    setCurrentIndex(index);
  };

  const currentTab = tabData[currentIndex] || {};

  return (
    <div className="my_container">
      <div className="template-group">
        <div className="template-tabs">
        {tabData.map((tab, index) => (
            <div
              key={tab.id}
              className={`tab ${currentIndex === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
              onMouseEnter={() => handleTabClick(index)}
            >
              {tab.tabName}
            </div>
          ))}
        </div>
        <div className="template-image">
          <img
            className="image"
            src={currentTab.tabImg}
            alt={currentTab.tabName}
          />
        </div>
      </div>
    </div>
  );
};

export default TemplateGroup;
