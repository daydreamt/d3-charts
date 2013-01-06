//generates random data for a bubblechart
//this is like, a copied pasted modified version from the scatterplot one
var dataset = [];
var numDataPoints = 1000;
var xRange = Math.random() * 1000;	
var yRange = Math.random() * 1000;
var rRange = Math.random() * 7;

for (var i = 0; i < numDataPoints; i++) {			
	var x = Math.round(Math.random() * xRange);	
	var y = Math.round(Math.random() * yRange);
    var r = Math.round(Math.random() * rRange);
	dataset.push([x, y, r]);			
}

			
//great, now we have the dataset, but not the JSON
var JSON = "{ "
var charttype = "\"ScatterPlot\""
var attr1 = "\"x\""
var attr2 = "\"y\""
var attr3 = "\"r\""

JSON += "\n \"charttype\": " + charttype + "\n, \"attr1\": "
     + attr1 + "\n, \"attr2\": "
     + attr2 + "\n, \"attr3\": "
     + attr3 + "\n, \"data\": ["

for (var i = 0; i < dataset.length; i++) {
	JSON += "\n { \"x\": " + dataset[i][0] + ", \"y\":"  + dataset[i][1] + ", \"r\":" + dataset[i][2] + " }";
	if(i != dataset.length -1) { //LET THE COMPILER OPTIMIZE THIS (WHAT COMPILER, LOL)
		JSON += "," }
	}

JSON += "\n" + "]" + "\n" + "}" 

console.log(JSON)