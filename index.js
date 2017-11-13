const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

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

const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Add Item',
      },
      {
        label: 'Clear Item',
      },
      {
        label: 'Quit',
        click() {
          app.quit();
        }
      }
    ],
  }
]
