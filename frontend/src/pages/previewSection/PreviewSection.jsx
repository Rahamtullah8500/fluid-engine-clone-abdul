import { useState, useRef, useEffect } from "react";
import "./PreviewSection.css";
import { useParams } from "react-router-dom";

const PreviewSection = () => {
  const [viewMode, setViewMode] = useState("desktop");
  const [textColor, setTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const iframeRef = useRef(null);
  const { title } = useParams();

  const applyStyles = (textColor, bgColor) => {
    const iframeDocument = iframeRef.current?.contentDocument;
    if (iframeDocument) {
      let styleSheet = iframeDocument.getElementById("dynamic-styles");
      if (!styleSheet) {
        styleSheet = iframeDocument.createElement("style");
        styleSheet.id = "dynamic-styles";
        iframeDocument.head.appendChild(styleSheet);
      }
      styleSheet.textContent = `
        body {
          color: ${textColor} !important;
          background-color: ${bgColor} !important;
        }
      `;
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    const onLoad = () => applyStyles(textColor, bgColor);
    if (iframe) {
      iframe.addEventListener("load", onLoad);
      return () => {
        iframe.removeEventListener("load", onLoad);
      };
    }
  }, [textColor, bgColor]);

  const handleColorChange = (newTextColor, newBgColor) => {
    setTextColor(newTextColor);
    setBgColor(newBgColor);
  };

  return (
    <div className="preview-container my_container">
      <div className="preview-left">
        <div className="preview-controls">
          <button
            className={`preview-button ${
              viewMode === "mobile" ? "active" : ""
            }`}
            onClick={() => setViewMode("mobile")}
          >
            Mobile
          </button>
          <button
            className={`preview-button ${
              viewMode === "desktop" ? "active" : ""
            }`}
            onClick={() => setViewMode("desktop")}
          >
            Desktop
          </button>
        </div>
        <div className={`preview-content ${viewMode}`}>
          <div className="preview-webpage">
            <iframe
              src={`https://${title ?  decodeURIComponent(title) : 'condesa'}-fluid-demo.squarespace.com/?nochrome=true`}
              title="Webpage Preview"
              frameBorder="0"
              ref={iframeRef}
            ></iframe>
          </div>
        </div>
      </div>
      <div className="preview-right">
        <div className="color-options">
          <button
            style={{ backgroundColor: "#000000" }}
            onClick={() => handleColorChange("#000000", "#FFFFFF")}
          ></button>
          <button
            style={{ backgroundColor: "#FFFFFF" }}
            onClick={() => handleColorChange("#000000", "#FFFFFF")}
          ></button>
          <button
            style={{ backgroundColor: "#FF5733" }}
            onClick={() => handleColorChange("#FFFFFF", "#FF5733")}
          ></button>
          <button
            style={{ backgroundColor: "#C70039" }}
            onClick={() => handleColorChange("#FFFFFF", "#C70039")}
          ></button>
          <button
            style={{ backgroundColor: "#FFC300" }}
            onClick={() => handleColorChange("#000000", "#FFC300")}
          ></button>
          <button
            style={{ backgroundColor: "#DAF7A6" }}
            onClick={() => handleColorChange("#000000", "#DAF7A6")}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
