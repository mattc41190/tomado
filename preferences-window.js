const {BrowserWindow} = require('electron')
const url = require('url');
const path = require('path')

function preferencesWindow(mainWindow) {
  let child = new BrowserWindow({parent: mainWindow.top, modal: true, show: false})

  child.loadURL(url.format({
    pathname: path.join(__dirname, '/app/preferences.html'),
    protocol: 'file:',
    slashes: true
  }))

  child.once('ready-to-show', () => {
    child.show()
  })

  child.on('closed', () => {
    win = null
  })
}

module.exports = {preferencesWindow};
