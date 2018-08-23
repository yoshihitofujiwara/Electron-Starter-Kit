import { ipcRenderer} from "electron";


/**
 * @class IpcRenderer
 */
export default class IpcRenderer {
  /**
   * constructor
   */
	constructor() {
		ipcRenderer.send("ipc", "ipc");

		ipcRenderer.on("udp", (event, arg) => {
			console.log(arg)
			global.app.mediator.trigger("udp", arg);
		});
	}
}
