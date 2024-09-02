import { useEffect, useRef, useState } from "react";
import './WebsiteBuilder.css'
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "tailwindcss/tailwind.css";
import gsWebpage from "grapesjs-preset-webpage";
import gsCustom from "grapesjs-custom-code";
import gsTabs from "grapesjs-tabs";
import { toast } from "react-toastify";
import addCustomBlocks from "./blocks";
import addToolbarButtons from "./toolbar";

const WebsiteBuilder = () => {
  const [editor, setEditor] = useState(null);
  const editorRef = useRef(null);

  useEffect(() => {
    const escapeName = (name) =>
      `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, "-");

    if (!editorRef.current) {
      const editorInstance = grapesjs.init({
        container: "#gis",
        fromElement: true,
        height: "100vh",
        width: "auto",
        // storageManager: false,
        selectorManager: { escapeName },
        assetManager: {
          upload: true, 
          autoAdd: true, 
          uploadText: "Drop files here or click to upload",
          uploadFile: function (e) {
            const files = e.dataTransfer
              ? e.dataTransfer.files
              : e.target.files;

            for (let i = 0; i < files.length; i++) {
              const file = files[i];
              const reader = new FileReader();
              reader.onload = (e) => {
                // Add the image to the asset manager
                editorInstance.AssetManager.add({
                  src: e.target.result,
                  name: file.name,
                });
              };
              reader.readAsDataURL(file);
            }
          },
        },
        plugins: ["grapesjs-tailwind", "CodeEditor", "exportCode"],
        pluginsOpts: {
          [gsWebpage]: {},
          [gsCustom]: {},
          [gsTabs]: {},
        },
        colorPicker: { appendTo: "parent", offset: { top: 26, left: -180 } },
        blockManager: {
          appendTo: "#blocks",
          open: true,
        },
        canvas: {
          styles: [
            "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
            "./grapes.css",
          ],
        },
        storageManager: {
          type: "remote",
          urlStore:
            "http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ",
          urlLoad:
            "http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ",
          autosave: false,
          autoload: true,
          contentTypeJson: true,
          storeComponents: true,
          allowScripts: 1,
          storeStyles: true,
          storeHtml: true,
          storeCss: true,
        },
      });

      addCustomBlocks(editorInstance);
      addToolbarButtons(editorInstance)      

      editorInstance.BlockManager.add("image", {
        label: "Image",
        content: { type: "image" },
        category: "Basic",
        attributes: { class: "fa fa-image" },
      }); 

      editorInstance.Commands.add("save-db", {
        run: () => handleSave(),
      });

      // if (templateId && templates[templateId]) {
        // editorInstance.setComponents(<div className=" h-5 w-20 bg-blue-600">checking</div>);
      // }

      const savedContent = JSON.parse(localStorage.getItem("MyPage"));

      if (savedContent) {
        editorInstance.setComponents(savedContent.components);
      }

      editorRef.current = editorInstance;
      setEditor(editorInstance);
    }

    return () => {
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  const handleSave = () => {
    if (editorRef.current) {
      const components = editorRef.current.getComponents();
      const savedContent = {
        components: components.toJSON(),
      };
      localStorage.setItem("MyPage", JSON.stringify(savedContent));
      toast.success("Saved");
    }
  };

  return (
    <div className="GrapesJsApp">
      <div className="Editor">
        <div id="blocks">
          <span className=" text-white">My Custom Blocks</span>
        </div>
        <div id="gis" style={{ height: "100%" }}></div>
      </div>
    </div>
  );
};

export default WebsiteBuilder;


// import grapesjsTailwind from 'grapesjs-tailwindcss';
// import thePlugin from "grapesjs-plugin-export";
// import pluginTooltip from "grapesjs-tooltip";
 // Add your custom buttons while keeping the default ones
      // const panelManager = editorInstance.Panels;

      // Clear default device buttons
      // const devicesPanel = panelManager.getPanel("devices-c");
      // if (devicesPanel) {
      //   devicesPanel.buttons.clear();
      // }

      // Add custom buttons to the existing 'options' panel
      // const optionsPanel = panelManager.getPanel("options");
      // optionsPanel &&
      //   optionsPanel.buttons.push([
      //     {
      //       id: "device-desktop",
      //       command: "set-device-desktop",
      //       className: "fa fa-desktop",
      //       attributes: { title: "Desktop" },
      //       active: true,
      //     },
      //     {
      //       id: "device-tablet",
      //       command: "set-device-tablet",
      //       className: "fa fa-tablet",
      //       attributes: { title: "Tablet" },
      //     },
      //     {
      //       id: "device-mobile",
      //       command: "set-device-mobile",
      //       className: "fa fa-mobile",
      //       attributes: { title: "Mobile" },
      //     },
      //     {
      //       id: "undo",
      //       command: "core:undo",
      //       className: "fa fa-undo",
      //       attributes: { title: "Undo" },
      //     },
      //     {
      //       id: "redo",
      //       command: "core:redo",
      //       className: "redo",
      //       attributes: { title: "Redo" },
      //     },
      //     {
      //       id: "delete",
      //       command: "core:component-delete",
      //       className: "fa fa-trash",
      //       attributes: { title: "Delete" },
      //     },
      //     {
      //       id: "save",
      //       command: "save-db",
      //       className: "fa fa-save",
      //       attributes: { title: "Save" },
      //     },
      //     {
      //       id: "download",
      //       command: "export-template",
      //       className: "fa fa-download",
      //       attributes: { title: "Download" },
      //     },
      //   ]);

    

      // editorInstance.Commands.add("export-template", {
      //   run: (editor) => {
      //     const html = editor.getHtml();
      //     const css = editor.getCss();
      //     const fullHtml = `
      //       <!DOCTYPE html>
      //       <html>
      //         <head>
      //           <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      //           <style>${css}</style>
      //         </head>
      //         <body>${html}</body>
      //       </html>`;
      //     const blob = new Blob([fullHtml], { type: "text/html" });
      //     const url = URL.createObjectURL(blob);
      //     const a = document.createElement("a");
      //     a.href = url;
      //     a.download = "template.html";
      //     a.click();
      //     URL.revokeObjectURL(url);
      //   },
      // });