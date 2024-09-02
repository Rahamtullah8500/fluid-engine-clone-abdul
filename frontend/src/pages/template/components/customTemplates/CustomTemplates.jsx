import './CustomTemplates.css'
import tempImg1 from "../../../../assets/tempImages/tempImg1.png";
import tempImg2 from "../../../../assets/tempImages/tempImg2.png";
import tempImg3 from "../../../../assets/tempImages/tempImg3.png";
import { Link } from "react-router-dom";

const CustomTemplates = () => {
  const templates = [
    {
      id: 1,
      name: "Template 1",
      previewImage: tempImg1,
    },
    {
      id:2,
      name: "Template 2",
      previewImage: tempImg2,
    },
    {
      id: 3,
      name: "Template 3",
      previewImage: tempImg3,
    },
  ];

  return (
    <div className=' my-12'>
      <div className="popular-templates-heading text-center">Custom Design Templates</div>

      <div className="custom-temp-container">
        {templates.map((eachItem) => {
          return (
            <Link key={eachItem.id} to={`/websiteBuilder/${eachItem.id}`}>
              
                <div className="custom-temp-image">
                  <img alt={eachItem.name} src={eachItem.previewImage} />
                </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CustomTemplates;
