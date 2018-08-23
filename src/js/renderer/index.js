import $ from "jquery";
import IpcRenderer from "./network/IpcRenderer";
import mediator from "./event/mediator";


global.app = {
	mediator: mediator,
	ipcRenderer: new IpcRenderer()
};


$(() => {
	let list = $("#PhotoList").find("li");
	let current = 0;

	list.click(() => {
		let next = current + 1;

		if(list.length-1 < next){
			next = 0;
		}
		moveTo(next);
	})
	.eq(current).css({
		opacity: 1
	});

	function moveTo(next) {
		list.eq(current).css({
			opacity: 0
		});
		list.eq(next).css({
			opacity: 1
		});
		current = next;
	}
});
