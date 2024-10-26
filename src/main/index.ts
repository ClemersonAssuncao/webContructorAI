import { app, BrowserWindow } from 'electron';
import path from 'path';
import { onAllWindowClose } from './events';

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, '..', 'render', 'pre-loader', 'main-pre-loader.js'),
      nodeIntegration: true,
      contextIsolation: false,
    }
  });
  mainWindow.maximize();
  mainWindow.loadFile(path.join(__dirname, '../../public/page/main-note/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', onAllWindowClose);

// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) createWindow();
// });
