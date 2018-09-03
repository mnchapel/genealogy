var boxWidth = 100,
    boxHeight = 40;


var spouseDataJson;
var treeDataJson = JSON.parse(treeData);

var spouseDataJson = JSON.parse(spouseDataString);

console.log(treeData);
console.log(spouseDataJson);

// Setup zoom and pan
var zoom = d3.behavior.zoom()
	.scaleExtent([.1,1])
	.on('zoom', function(){
	svg.attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
	})
	// Offset so that first pan and zoom does not jump back to the origin
	.translate([150, 200]);

var svg = d3.select("body").append("svg")
	.attr('width', "100%")
	.attr('height', "100%")
	.call(zoom)
	.append('g')
	.attr("transform", "translate(150,200)");

var tree = d3.layout.tree()
  .nodeSize([175, 175])
  .separation(function(){ return 1.; })
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



// Style links (edges)
/*svg.selectAll("path.link")
	.data(links)
	.enter().append("path")
	.attr("class", "link")
	.attr("d", elbow);*/

// Style nodes    
var node = svg.selectAll("g.person")
	.data(nodes)
	.enter().append("g")
	.attr("class", "person")
	.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

// Draw the hexagon
node.append("image")
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
	
// Draw the person's firstname and position it inside the box
node.append("text")
	.attr("dx", 0)
	.attr("dy", -10)
	.attr("text-anchor", "middle")
	.attr('class', 'firstname')
	.text(function(d) { return d.firstname; });

// Draw the person's lastname and position it inside the box
node.append("text")
	.attr("dx", 0)
	.attr("dy", 10)
	.attr("text-anchor", "middle")
	.attr('class', 'lastname')
	.text(function(d) { return d.lastname; });

// Draw the spouse lines
svg.selectAll(".spouseLine")
	.data(spouseDataJson[0])
	.enter()
	.append("path")
	.attr("class", "spouseLine")
	.attr("d", spouseLine);


function spouseLine(d, i)
{
	//start point
	var start = allNodes.filter(function (v)
	{
		if (d.source.id == v.id)
			return true;
		else
			return false;
	});

	//end point
	var end = allNodes.filter(function (v)
	{
		if (d.target.id == v.id)
			return true;
		else
			return false;
	});

	//define the start coordinate and end co-ordinate
	var linedata =
	[{
		x: start[0].x+75,
		y: start[0].y
	},
	{
		x: end[0].x-75,
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
