const {app, BrowserWindow, ipcMain} = require('electron')
const url = require("url");
const path = require("path");
var port = 4002

const { exec, spawn } = require('child_process');
// const wmic = require('wmic');
var cors = require('cors')

let mainWindow

application.use(cors())

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    }
  })

  mainWindow.loadURL("http://192.168.1.86:4002");
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

