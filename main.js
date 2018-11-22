const electron = require('electron')
// module to control the app life and native browser window
const {app, BrowserWindow} = electron;

const path = require('path')
const url = require('url')

let mainWindow;

function createWindow() {
    // create the browser Window
    mainWindow = new BrowserWindow({width: 600, height: 800, resizable: true, icon: 'logo.png'})

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)


app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createWindow()
    }
})
