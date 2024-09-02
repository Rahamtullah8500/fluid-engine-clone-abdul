const addToolbarButtons = (editor) => {
  const panelManager = editor.Panels;

  // Clear default device buttons
  const devicesPanel = panelManager.getPanel("devices-c");
  if (devicesPanel) {
      devicesPanel.buttons.clear();
  }

  // Create a new panel for the device buttons on the left
  panelManager.addPanel({
    id: "devices-c",
    el: ".panel__devices",
    buttons: [
      {
        id: "device-desktop",
        command: "set-device-desktop",
        className: "fa fa-desktop",
        attributes: { title: "Desktop" },
        active: true,
      },
      {
        id: "device-tablet",
        command: "set-device-tablet",
        className: "fa fa-tablet",
        attributes: { title: "Tablet" },
      },
      {
        id: "device-mobile",
        command: "set-device-mobile",
        className: "fa fa-mobile",
        attributes: { title: "Mobile" },
      },
    ],
  });

  // Add custom buttons to the existing 'options' panel
  const optionsPanel = panelManager.getPanel("options");
  optionsPanel &&
    optionsPanel.buttons.push([
      {
        id: "device-desktop",
        command: "set-device-desktop",
        className: "fa fa-desktop",
        attributes: { title: "Desktop" },
        active: true,
      },
      {
        id: "device-tablet",
        command: "set-device-tablet",
        className: "fa fa-tablet",
        attributes: { title: "Tablet" },
      },
      {
        id: "device-mobile",
        command: "set-device-mobile",
        className: "fa fa-mobile",
        attributes: { title: "Mobile" },
      },
      {
        id: "undo",
        command: "core:undo",
        className: "fa fa-undo",
        attributes: { title: "Undo" },
      },
      {
        id: "redo",
        command: "core:redo",
        className: "redo",
        attributes: { title: "Redo" },
      },
      {
        id: "delete",
        command: "core:component-delete",
        className: "fa fa-trash",
        attributes: { title: "Delete" },
      },
      {
        id: "save",
        command: "save-db",
        className: "fa fa-save",
        attributes: { title: "Save" },
      },
      {
        id: "download",
        command: "export-template",
        className: "fa fa-download",
        attributes: { title: "Download" },
      },
    ]);

  // Custom commands for setting devices
  editor.Commands.add("set-device-desktop", {
    run: (editor) => editor.setDevice("Desktop"),
  });
  editor.Commands.add("set-device-tablet", {
    run: (editor) => editor.setDevice("Tablet"),
  });
  editor.Commands.add("set-device-mobile", {
    run: (editor) => editor.setDevice("Mobile portrait"),
  });


  // Custom export template command
  editor.Commands.add("export-template", {
    run: (editor) => {
      const html = editor.getHtml();
      const css = editor.getCss();
      const fullHtml = `
          <!DOCTYPE html>
          <html>
            <head>
              <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
              <style>${css}</style>
            </head>
            <body>${html}</body>
          </html>`;
      const blob = new Blob([fullHtml], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "template.html";
      a.click();
      URL.revokeObjectURL(url);
    },
  });
};

export default addToolbarButtons;
