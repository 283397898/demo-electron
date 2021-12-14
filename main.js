const {app, BrowserWindow,ipcMain} = require('electron')

ipcMain.on('height',(event, args)=>{
    console.log(args)
})
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
    mainWindow.webContents.on('did-finish-load',()=>{
        mainWindow.webContents.send('url','https://www.bilibili.com')
    })
    mainWindow.webContents.openDevTools()
    mainWindow.on('close', () => {
        mainWindow = null
    })
})
