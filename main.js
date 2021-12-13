const {app, BrowserWindow} = require('electron')

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    require('@electron/remote/main').initialize()
    require("@electron/remote/main").enable(mainWindow.webContents)
    mainWindow.loadFile('./src/index.html')
    mainWindow.webContents.openDevTools()
    mainWindow.on('close', () => {
        mainWindow = null
    })
})
