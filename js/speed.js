

var com_dataset = {
	fillColor: "rgba(151,187,205,0.5)",
	strokeColor: "#099EC6",
	pointColor: "#002E67",
	pointStrokeColor: "#fff"
};
var com_opt = {
	scaleOverlay: false,
	scaleOverride: false,
	scaleLineColorX: "transparent",
	scaleLineColorY: "#002E67",
	scaleLineWidth: 3,
	scaleFontFamily: "'comfortaa'",
	scaleFontSize: 12,
	scaleFontStyle: "normal",
	scaleFontColorY: "#099EC6",
	scaleFontColorX: "rgb(127,127,127)",
	scaleShowGridLinesX: true,
	scaleShowGridLinesY: false,
	scaleShowMiniLinesY: false,
	scaleGridLineColor: "rgba(0,0,0,.05)",
	scaleGridLineWidth: 2,
	bezierCurve: false,
	pointDot: true,
	pointDotRadius: 4,
	pointDotStrokeWidth: 2,
	datasetStroke: true,
	datasetStrokeWidth: 1,
	datasetFill: false,
	animation: true,
	animationSteps: 60,
	animationEasing: "easeOutQuart",
	onAnimationComplete: null
};

var item_dataset = {
	datasets: [jQuery.extend({}, com_dataset)]
};

var item_opt = jQuery.extend({}, com_opt);
item_opt.scaleSteps = null;
item_opt.scaleStepWidth = null;
item_opt.scaleStartValue = null;


var cpu_speed = new Speedometer({
	elementId: 'speedometer',
	canvasId: 'myGraphic',
	size: 300,
	maxVal: 100,
	name: 'CPU',
	units: '%'
});

var disk_speed = new Speedometer({
	elementId: 'speedometer',
	canvasId: 'myGraphic',
	size: 300,
	maxVal: 100,
	name: 'DISK',
	units: 'GB'
});

var mem_speed = new Speedometer({
	elementId: 'speedometer',
	canvasId: 'myGraphic',
	size: 300,
	maxVal: 100,
	name: 'RAM',
	units: 'MB'
});



function startCPU(){

	document.getElementById('oculto').style.display = 'block';
		
	document.getElementById("title").innerHTML = "CPU usage (%)";
	document.getElementById('actualize_button').onClick = "actualizeCPU();";

	cpu_speed.draw();
	cpu_speed.drawWithInputValue(50);
	
};

function startDISK(){

	document.getElementById('oculto').style.display = 'block';

	document.getElementById("title").innerHTML = "Disk usage (GB)";
	document.getElementById('actualize_button').onClick = "actualizeDISK();";

	disk_speed.draw();
	disk_speed.drawWithInputValue(50);
	
};

function startRAM(){

	document.getElementById('oculto').style.display = 'block';

	document.getElementById("title").innerHTML = "RAM usage (MB)";
	document.getElementById('actualize_button').onClick = "actualizeRAM();";
	
	mem_speed.draw();
	mem_speed.drawWithInputValue(50);
};




function actualizeCPU(){
	var use = document.getElementById("percent").value;
	cpu_speed.draw();
	cpu_speed.drawWithInputValue(use);
};

function actualizeDISK(){
	var use = document.getElementById("percent").value;
	disk_speed.draw();
	disk_speed.drawWithInputValue(use);

};

function actualizeRAM(){
	var use = document.getElementById("percent").value;
	mem_speed.draw();
	mem_speed.drawWithInputValue(use);
};

/*

*/


