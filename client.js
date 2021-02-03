const {app, BrowserWindow, ipcMain} = require('electron')
const url = require("url");
const path = require("path");
var express = require('express')
const application = express();
var port = 4002
var os = require('os')
var fs = require('fs')
var http = require('http').createServer(application);
const { exec, spawn } = require('child_process');
var cors = require('cors')

let mainWindow

application.use(cors())



http.listen(port|| 3000, function() {
  var host = http.address().address
  var port = http.address().port
  console.log('App listening at http://%s:%s', host, port)
});


function createWindow () {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false
    }
  })
  mainWindow.setKiosk(true);
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

