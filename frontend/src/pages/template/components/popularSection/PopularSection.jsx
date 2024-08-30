import "./PopularSection.css";
import popular1 from "../../../../../public/images/image-pop1.jpeg";
import popular2 from "../../../../../public/images/image-pop2.jpeg";
import popular3 from "../../../../../public/images/image-pop3.jpeg";
import popular4 from "../../../../../public/images/image-pop4.jpeg";
import popular5 from "../../../../../public/images/image-pop5.jpeg";
import popular6 from "../../../../../public/images/image-pop6.jpeg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from "../../../../apiClient";
import { useDispatch } from "react-redux";
import { setTemplates } from "../../../../store/slice/TemplateSlice";

const popularTemplateData = [
  {
    id: 1,
    title: "condesa",
    img: popular1,
    imgPath: "../../../../../public/images/image-pop1.jpeg",
  },
  {
    id: 2,
    title: "Tantillo",
    img: popular2,
    imgPath: "../../../../../public/images/image-pop2.jpeg",
  },
  {
    id: 3,
    title: "Forma",
    img: popular3,
    imgPath: "../../../../../public/images/image-pop3.jpeg",
  },
  {
    id: 4,
    title: "Crosby",
    img: popular4,
    imgPath: "../../../../../public/images/image-pop4.jpeg",
  },
  {
    id: 5,
    title: "Oranssi",
    img: popular5,
    imgPath: "../../../../../public/images/image-pop5.jpeg",
  },
  {
    id: 6,
    title: "Wesley",
    img: popular6,
    imgPath: "../../../../../public/images/image-pop6.jpeg",
  },
];

const PopularSection = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const response = await apiClient.get("/api/templates");
      setData(response.data);
      dispatch(setTemplates(response.data))
      console.log("templ", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching templates list:", error);
      throw error;
    }
  };

  
  return (
    <div className="popular-templates-section">
      <div className="popular-templates-heading">Popular Designs Templates</div>
      <div className="popular-designs">
        {data && data.map((eachItem) => {
          return (
            <Link
              key={eachItem.id}
              to={`/preview/${encodeURIComponent(eachItem.title)}`}
            >
              <div className="popular-designs-item">
                <img src={eachItem.imgPath} alt={eachItem.title} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PopularSection;
