

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


var item_speed = new Speedometer({
	elementId: 'speedometer',
	size: 300,
	maxVal: 100,
	name: 'CPU',
	units: '%'
});




function startMonitor(item){

	var element_id = item.options[item.selectedIndex].value;

	if (element_id == 0){
		document.getElementById("element").innerHTML = "CPU";
		document.getElementById("title").innerHTML = "CPU usage (%)";

		item_speed.name = "CPU";
		item_speed.units = "%";

		item_speed.draw();
		item_speed.drawWithInputValue(50);
	
	}else if (element_id == 1){
		document.getElementById("element").innerHTML = "DISK";
		document.getElementById("title").innerHTML = "Disk usage (GB)";


		item_speed.name = "DISK";
		item_speed.units = "GB";

		item_speed.draw();
		item_speed.drawWithInputValue(50);
	
	}else if (element_id == 2){
		document.getElementById("element").innerHTML = "RAM";
		document.getElementById("title").innerHTML = "RAM usage (MB)";


		item_speed.name = "RAM";
		item_speed.units = "MB";

		item_speed.draw();
		item_speed.drawWithInputValue(50);
	}
};



function actualize(){
	var use = document.getElementById("percent").value;
	item_speed.drawWithInputValue(use);
};

