const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 750,
    height: 1100,
    icon: path.join(__dirname, 'assets/64x64.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win.setMenu(null)
  win.loadFile('src/main.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
    app.quit()
})