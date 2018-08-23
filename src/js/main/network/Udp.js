import dgram from "dgram";


/**
 * @class Udp UDP通信（受信側）
 */
export default class Udp {
  /**
   * constructor
   */
	constructor() {
		this.isMutual = false;
		this.cliant = dgram.createSocket("udp4");
		this.server = dgram.createSocket("udp4");
	}


	/**
	 * @method setup
	 * @param {ipcRenderer}
	 */
	setup(ipcRenderer){
		if (this.isMutual) {
			this._udpTEST();
			return false;
		}
		this.isMutual = true;
		// this.cliant.on("listening", () => {
		// 	console.log("upd listening");
		// });

		// this.cliant.close();

		this.cliant.on("message", (buf, rinfo) => {
			var str = buf.toString("utf-8", 0, buf.length);
			console.log(str);
			ipcRenderer.sender.send("udp", str);
		});

		this.cliant.bind(global.setting.port, global.setting.host);

		this._udpTEST();
	}


	/**
	 * @method _udpTEST
	 */
	_udpTEST(){
		let message = new Buffer("UDP SEND TEST");
		// this.server.close();

		// setInterval(() => {
			this.server.send(message, 0, message.length, global.setting.port, global.setting.host, (err, bytes) => {
				if (err) throw err;
				console.log('UDP message sent to');
					// this.server.close();
			});
		// }, 100);
	}
};
