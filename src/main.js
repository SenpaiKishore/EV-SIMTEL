const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 700,
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, '../icon.ico')
  });

  // mainWindow.setMenu(null);

  mainWindow.loadFile(path.join(__dirname, 'home.html')).catch(err => {
    console.error('Failed to load index.html:', err);
  });
  

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
