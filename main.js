const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    //   resizable: false,
    //   frame: false,
    titleBarStyle: 'hiddenInset',
    //   titleBarStyle: 'customButtonsOnHover',
      width: 400,
      height: 600})

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
