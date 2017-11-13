const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, Menu} = electron;

let mainWindow, addWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({});

  mainWindow.loadURL(url.format({
    pathname: path.resolve(__dirname, 'mainWindow.html'),
    protocol: 'file:',
    slashes: true
  }));

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

function createAddWindow() {
  addWindow = new BrowserWindow({});

  addWindow.loadURL(url.format({
    pathname: path.resolve(__dirname, 'addWindow.html'),
    protocol: 'file:',
    slashes: true
  }));
}

const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Add Item',
        click() {
          createAddWindow();
        }
      },
      {
        label: 'Clear Item',
      },
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ],
  }
]
