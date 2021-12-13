const {BrowserWindow}=require('@electron/remote')
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        let win = new BrowserWindow({
            width: 800,
            height: 600,
        })
        win.loadURL('https://www.baidu.com')
    })
})
