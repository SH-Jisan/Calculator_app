// main.js

const { app, BrowserWindow } = require('electron');
const path = require('path');

// Create a new Electron window
function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        height: 600,
        webPreferences: {
            nodeIntegration: true  // Allow the use of Node.js in the renderer process
        }
    });

    win.loadFile('index.html');  // Load the HTML file
}

// Launch the app
app.whenReady().then(createWindow);

// Quit when all windows are closed (except macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
