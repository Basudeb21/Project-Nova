const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const { registerIpcHandlers } = require("./ipc");
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,

        minWidth: 1000,
        minHeight: 700,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true
        }
    });

    mainWindow.loadURL("http://localhost:3000");

    // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    Menu.setApplicationMenu(null);
    registerIpcHandlers();
    createWindow();
});
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
