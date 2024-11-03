const { app, BrowserWindow, webContents } = require("electron");
const path = require("node:path");

require("@electron/remote/main").initialize();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1125,
    height: 600,
    frame: false,
    //transparent: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  require("@electron/remote/main").enable(win.webContents);
  win.loadFile("build/html/index.html");
};

app.whenReady().then(() => {
  createWindow();
});