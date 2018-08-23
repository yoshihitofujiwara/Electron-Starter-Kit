import electron from "electron";


/**
 * @class Ipc メインプロセス（受信側）
 */
export default class Ipc {
  /**
   * constructor
   */
	constructor() {
		this.ipcRenderer = null;
	}


	/**
	 * @method setup
	 * @param {Function} callback
	 */
	setup(callback){
		electron.ipcMain.on("ipc", (event, arg) => {
			if (!this.ipcRenderer) {
				this.ipcRenderer = event;
			}

			// console.log(arg)  // prints "ipc"
			if (typeof callback == "function"){
				callback(this.ipcRenderer);
			}
		});
	}
};
