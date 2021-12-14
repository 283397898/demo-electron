const {BrowserWindow}=require('@electron/remote')
const {ipcRenderer} = require('electron')
const fs = require("fs");

async function getUrl(){
    return await new Promise((resolve) => {
        ipcRenderer.on('url', (event, args) => {
            return resolve(args)
        })
    })
}

window.onload=async()=>{
    let win = new BrowserWindow({ webPreferences: { offscreen: true } })
    win.webContents.setFrameRate(30)
    win.webContents.openDevTools()
    const url = await getUrl()
    await win.loadURL(url)
    win.webContents.on('did-finish-load',()=>{
        let height=document.body.scrollHeight
        ipcRenderer.sendSync('height',height)
    })
    win.webContents.on('paint', (event, dirty, image) => {
        fs.writeFileSync('ex.png', image.toPNG())
    })

}
