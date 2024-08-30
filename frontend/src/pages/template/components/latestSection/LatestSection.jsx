import { motion } from "framer-motion";
import "./LatestSection.css";
import latest1 from "../../../../../public/images/latest1.jpeg";
import latest2 from "../../../../../public/images/latest2.jpeg";
import latest3 from "../../../../../public/images/latest3.jpeg";

const LatestSection = () => {
  return (
    <div className="latest-templates-section">
      <h2 className="latest-templates-heading">Latest Templates</h2>
      <div className="latest-designs">
        <motion.div
          className="latest-designs-item"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={latest1} alt="Image 1" />
        </motion.div>
        <motion.div
          className="latest-designs-item"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={latest2} alt="Image 2" />
        </motion.div>
        <motion.div
          className="latest-designs-item"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={latest3} alt="Image 3" />
        </motion.div>
      </div>
    </div>
  );
};

export default LatestSection;
