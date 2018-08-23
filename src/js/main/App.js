import electron from "electron";
// import Ipc from "./network/Ipc";
// import Udp from "./network/Udp";


/**
 * @class App アプリケーション
 */
export default class App {
  /**
   * constructor
   */
	constructor() {
		// this.ipc = new Ipc();
		// this.udp = new Udp();

		this.window = null;

		this.windowOptions = {
			width: 1920,
			height: 1080,
			kiosk: !global.setting.isDevelop,
			fullscreen: !global.setting.isDevelop,
			frame: global.setting.isDevelop
		};

		//  初期化が完了した時の処理
		electron.app.on("ready", this.openWindow.bind(this));

		// 全てのウィンドウが閉じたときの処理
		electron.app.on("window-all-closed", () => {
			// macOSのとき以外はアプリケーションを終了させます
			if (process.platform !== "darwin") {
				electron.app.quit();
			}
		});

		// アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時）
		electron.app.on("activate", () => {
			// メインウィンドウが消えている場合は再度メインウィンドウを作成する
			if (this.window === null) {
				this.openWindow();
			}
		});

		this.openWindow();
	}


	/**
	 * @method openWindow
	 */
	openWindow() {
		// メインウィンドウ生成
		this.window = new electron.BrowserWindow(this.windowOptions);

		// メインウィンドウに表示するURLを指定
		this.window.loadFile("index.html");

		// デベロッパーツールの起動
		if (global.setting.isDevelop){
			this.window.webContents.openDevTools();
		}

		// メインウィンドウが閉じられたときの処理
		this.window.on("closed", () => {
			this.window = null;
		});

		// アプリを落とす ctr + q
		electron.globalShortcut.register("ctrl+q", () => {
			// キャッシュの削除
			electron.session.defaultSession.clearCache(() => { })
			this.window.close();
			electron.app.quit();
		});

		// 通信の設定
		// this.ipc.setup((ipcRenderer) => {
		// 	this.udp.setup(ipcRenderer);
		// });
	}
};
