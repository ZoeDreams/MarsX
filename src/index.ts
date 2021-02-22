import {app, BrowserWindow, Menu} from 'electron'
declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
	// eslint-disable-line global-require
	app.quit()
}

// TODO create Game wrapper class that encapsulates all of this stuff.

/**
 * create our game window in electron.app `ready` event. This is called after
 * everything needed by electron has been initialized.
 *
 * @returns void
 */
const createGameWindow = (): void => {
	// Create the browser window.
	const mainWindow: BrowserWindow = new BrowserWindow({
		width: 800,
		height: 600,
		minWidth: 800,
		minHeight: 600,
		frame: false,
		show: false,
		backgroundColor: '#000000',
		title: 'MarsX',
		titleBarStyle: 'hidden',
		webPreferences: {
			nodeIntegration: false,
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
			spellcheck: false,
			enableWebSQL: false,
		},
	})

	// maximize the window to fullscreen
	mainWindow.maximize()

	// and load the index.html of the app.
	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

	//disable the default file menu
	Menu.setApplicationMenu(null)

	// opens the window on the users desktop
	mainWindow.show()

	// Open the DevTools.
	mainWindow.webContents.openDevTools({
		mode: 'undocked',
	})
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createGameWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createGameWindow()
	}
})
