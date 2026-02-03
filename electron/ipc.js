const { ipcMain } = require("electron");

function registerIpcHandlers() {
    ipcMain.handle("ping-electron", () => {
        return "Hello from Electron 👋";
    });
}

module.exports = { registerIpcHandlers };
