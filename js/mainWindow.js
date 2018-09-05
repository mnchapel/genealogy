var boxWidth = 100,
    boxHeight = 40;

var treeDataJson    = JSON.parse(treeData);
var spouseDataJson  = JSON.parse(spouseDataString);
var famillyDataJson = JSON.parse(famillyDataString);






// Create the slider
console.log("Create the slider");
var divSlider = document.createElement("div");
divSlider.id = "slider";
divSlider.classList.add("slider");
var divFirstLastName = document.createElement("div");
divFirstLastName.id = "firstLastName";
divFirstLastName.classList.add("whitePencil");
divFirstLastName.classList.add("center");
divSlider.appendChild(divFirstLastName);

document.getElementsByTagName("body")[0].appendChild(divSlider);

// Hide the slider
var slider = $('#slider').slideReveal();
console.log("hide the slider");






// Setup zoom and pan
var zoom = d3.behavior.zoom()
	.scaleExtent([.1,1])
	.on('zoom', function(){
	svg.attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
	})
	// Offset so that first pan and zoom does not jump back to the origin
	.translate([150, 200]);


var svg = d3.select("body").append("svg")
	.attr("width", "100%")
	.attr("height", "100%")
	.attr("position", "absolute")
	.call(zoom)
	.append("g")
	.attr("transform", "translate(150,200)");

var nodeWidth  = 220;
var nodeHeight = 200;

var tree = d3.layout.tree()
  .nodeSize([nodeWidth, nodeHeight])
  .separation(function(a, b){ if (a.remove || b.remove) return 0.5; return 1.; })
  .children(function(d){ return d.parents; });

var nodes = tree.nodes(treeDataJson[0]);



function flatten(root)
{
	var n = [], i = 0;

	function recurse(node)
	{
	    if(node.parents)
		node.parents.forEach(recurse);
	    n.push(node);	
	}

	recurse(root);

	return n;
}



var allNodes = flatten(treeDataJson[0]);


console.log("add on click on person");
// Style nodes    
var node = svg.selectAll("g.person")
	.data(nodes)
	.enter().append("g")
	.attr("class", "person")
	.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
	.on("click", function(d)
	{
		// Fill the div
		$('#firstLastName').html(d.firstname + " " + d.lastname);

		// Show the slider
		var slider = $('#slider').slideReveal();
		slider.slideReveal("show");
	});;



// Draw the hexagon
node.append("image")
	.attr("class", "hexagon")
	.attr("xlink:href", function(d){ if(d.sex == "M") return "img/hexagon_blue.png"; return "img/hexagon_pink.png"; })
	.attr("x", -75)
	.attr("y", -75)
	.attr("height", 150)
	.attr("width", 150)
	.attr("display", function(d)
	{
		if(d.hidden)
			return "none";
		else
			return "";
	});

// Draw the banner
node.append("image")
	.attr("xlink:href", "img/banner.png")
	.attr("x", -100)
	.attr("y", +30)
	.attr("width", 200)
	.attr("display", function(d)
	{
		if(d.hidden)
			return "none";
		else
			return "";
	});
	
// Draw the person's firstname and position it inside the box
node.append("text")
	.attr("dx", 0)
	.attr("dy", -10)
	.attr("text-anchor", "middle")
	.attr('class', 'firstname')
	.text(function(d)
	{
		console.log("d.firstname " + d.firstname);
		var firstname = d.firstname.split(" ");
		return d.firstname;
	});

// Draw the person's lastname and position it inside the box
node.append("text")
	.attr("dx", 0)
	.attr("dy", 10)
	.attr("text-anchor", "middle")
	.attr("class", "lastname")
	.text(function(d) { return d.lastname; });

// Draw the person's birthDate-deathDate and position it inside the box
node.append("text")
	.attr("dx", 0)
	.attr("dy", 50)
	.attr("text-anchor", "middle")
	.attr('class', 'dates')
	.text(function(d)
	{
		if(d.hidden)
			return "";

		var dates;

		birthDateSplitted = d.birthDate.split(" ");
		dates = birthDateSplitted[2];

		if(d.deathDate)
		{
			deathDateSplitted = d.deathDate.split(" ");
			dates = dates + " - " + deathDateSplitted[2];
		}

		return dates;
	});




// Draw the spouse lines
svg.selectAll(".spouseLine")
	.data(spouseDataJson)
	.enter()
	.append("path")
	.attr("class", "spouseLine")
	.attr("d", spouseLine);




// Draw the familly lines
svg.selectAll(".famillyLine")
	.data(famillyDataJson)
	.enter()
	.append("path")
	.attr("class", "famillyLine")
	.attr("d", famillyLine);







function spouseLine(d, i)
{
	//start point
	var start = allNodes.filter(function(v)
	{
		if(d.source.id == v.id)
			return true;
		else
			return false;
	});

	//end point
	var end = allNodes.filter(function(v)
	{
		if(d.target.id == v.id)
			return true;
		else
			return false;
	});

	//define the start coordinate and end co-ordinate
	var linedata =
	[{
		x: start[0].x+62,
		y: start[0].y
	},
	{
		x: end[0].x-62,
		y: end[0].y
	}];

	var fun = d3.svg.line().x(function(d){ return d.x; })
				.y(function(d){ return d.y; })
				.interpolate("linear");

	return fun(linedata);
}







function famillyLine(d, i)
{
	//start point: the child
	var start = allNodes.filter(function(v)
	{
		if(d.source.id == v.id)
			return true;
		else
			return false;
	});

	//end point: the parents
	var end = allNodes.filter(function(v)
	{
		if(d.target.id == v.id)
			return true;
		else
			return false;
	});

	var diff = end[0].y - start[0].y - (75*2);
	var ny = diff * 0.40;

	//define the start coordinate and end co-ordinate
	var linedata =
	[{
		x: start[0].x,
		y: start[0].y+75
	},
	{
		x: start[0].x,
		y: start[0].y+75+ny
	},
	{
		x: end[0].x,
		y: start[0].y+75+ny
	},
	{
		x: end[0].x,
		y: end[0].y
	}];

	var fun = d3.svg.line().x(function(d){ return d.x; })
				.y(function(d){ return d.y; })
				.interpolate("linear");

	return fun(linedata);
}



    
/**
 * Custom path function that creates straight connecting lines.
 */
function elbow(d) {
  return "M" + d.source.x + "," + d.source.y
    + "V" + (d.source.y + (d.target.y-d.source.y)/2)
    + "H" + d.target.x 
    + "V" + d.target.y;
}
