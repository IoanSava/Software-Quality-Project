const electron = require("electron");
const path = require("path");

let mainWindow;
let app = electron.app;

app.on("ready", function () {
    mainWindow = new electron.BrowserWindow({});
    mainWindow.loadURL(path.join(__dirname, "main-window.html"));
});

module.exports = {};