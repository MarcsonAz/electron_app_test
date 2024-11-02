console.log("Processo iniciado!")

const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // exemplo de coisas que são feitas antes do app abrir
    // são funções, mas podem ser variáveis
    // considerando carregar os dados
    webPreferences: {
      preload: path.join(__dirname, './src/public/js/preload.js')
    }
  })

  win.loadFile('./src/views/index.html')
}

app.whenReady().then(() => {
  createWindow()
})