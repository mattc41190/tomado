const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url');
const menuTemplate = require('./menu-template.js');
const menu = Menu.buildFromTemplate(menuTemplate)

let win

function createWindow () {
  // Create Menus
  Menu.setApplicationMenu.call(this, menu)

  // Create the browser window.
  win = new BrowserWindow({
      icon: path.join(__dirname, 'app/assets/images/tomato5.png'),
      backgroundColor: '#faf7f3',
      titleBarStyle: 'hiddenInset',
      width: 400,
      height: 600,
      minWidth: 350,
      minHeight: 480})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, '/app/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
