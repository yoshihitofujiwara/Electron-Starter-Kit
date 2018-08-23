import App from "./App";
import Setting from "./Setting";


global.setting = new Setting();

global.setting.load(() => {
	new App();
});
