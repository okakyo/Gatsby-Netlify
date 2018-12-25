const electron=require('electron');
const app=electron.app;
const BrowserWindow =electron.BrowserWindow;

let win;

function createwindow(){
    win = new BrowserWindow({width:600,height:400});
    win.loadURL("file://"+__dirname+"/index.html");
    win.on('closed',function(){
        win=null;});
 }
app.on('ready',createwindow);
app.on('window-all-closed',()=>{
    if(process.platform!=='darwin') app.quit();
});

app.on('activate',()=>{
    if(win===null) createwindow();
});