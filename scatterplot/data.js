//Create the JSON dataset for scatterplots.
var dataset = [];
var numDataPoints = 1000;
var xRange = Math.random() * 1000;	//Max range of new x values
var yRange = Math.random() * 1000;	//Max range of new y values
for (var i = 0; i < numDataPoints; i++) {			
	var x = Math.round(Math.random() * xRange);	
	var y = Math.round(Math.random() * yRange);	
	dataset.push([x, y]);			
}

			
//great, now we have the dataset, but not the JSON
var JSON = "{ "
var charttype = "\"ScatterPlot\""
var attr1 = "\"x\""
var attr2 = "\"y\""

JSON += "\n \"charttype\": " + charttype + "\n, \"attr1\": " + attr1 + "\n, \"attr2\": " + attr2 + "\n, \"data\": ["

for (var i = 0; i < dataset.length; i++) {
	JSON += "\n { \"x\": " + dataset[i][0] + ", \"y\":"  + dataset[i][1] + " }";
	if(i != dataset.length -1) { //LET THE COMPILER OPTIMIZE THIS (WHAT COMPILER, LOL)
		JSON += "," }
	}

JSON += "\n" + "]" + "\n" + "}" 

//print(JSON)