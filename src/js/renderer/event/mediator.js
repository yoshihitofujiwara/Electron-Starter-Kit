const mediator = new INK.Events();

export default mediator;


mediator.on("udp", (arg) =>{
	console.log("render");
	// alert(arg);
});


