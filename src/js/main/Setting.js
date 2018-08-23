import fs from "fs";
import cheerio from "cheerio";


/**
 * @class Setting 設定ファイルの読み込み
 */
export default class Setting {
  /**
   * constructor
   */
	constructor() {
		this.isDevelop = process.argv[2] && process.argv[2].indexOf("-development") != -1;

		this.file = "./htdocs/settings.xml";

		// cheerio
		this.$ = null;
		// this.host = null;
		// this.port = null;
	}


	/**
	 * @private
	 * @method _setData データのセット
	 * @param {BufferObject} data
	 */
	_setData(data) {
		this.$ = cheerio.load(data);
		let $network = this.$("network");
		this.host = $network.children("host").text();
		this.port = $network.children("port").text();
	}


	/**
	 * @method load ファイル読み込み
	 * @param {Function} callback
	 */
	load(callback) {
		fs.readFile(this.file, (err, data) => {

			if (err) {
				console.log(err);
			} else {
				this._setData(data);
			}
			if (typeof callback == "function") callback();
		});
	}
}
