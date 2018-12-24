const electron=require('electron');
const app=electron.app;
const BrowserWindow =electron.BrowserWindow;

let win;

app.on('ready',function(){
    mainWindow= new BrowserWindow({width:600,height:400});
    mainWindow.loadURL("file://"+__dirname+"/index.html");
    mainWindow.on('closed',function(){
        mainWindow=null;
    });
});