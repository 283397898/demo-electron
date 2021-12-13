const { contextBridge,BrowserWindow } = require('electron')

contextBridge.exposeInMainWorld('myAPI', {
    BrowserWindow
})