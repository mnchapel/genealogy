var boxWidth = 100,
    boxHeight = 40;

console.log(treeData);

treeDataJson = JSON.parse(treeData);

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
		console.log("node name: " + node.name);
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
	
// Draw the person's name and position it inside the box
node.append("text")
	.attr("dx", -(boxWidth/2))
	.attr("dy", 0)
	.attr("text-anchor", "middle")
	.attr('class', 'name')
	.text(function(d) { return d.name; });
    
/**
 * Custom path function that creates straight connecting lines.
 */
function elbow(d) {
  return "M" + d.source.x + "," + d.source.y
    + "V" + (d.source.y + (d.target.y-d.source.y)/2)
    + "H" + d.target.x 
    + "V" + d.target.y;
}
