var boxWidth = 100,
    boxHeight = 40;

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
  .nodeSize([175, 150])
  .separation(function(){ return 1.; })
  .children(function(d){ return d.parents; });

var nodes = tree.nodes(treeData);

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
	.attr("xlink:href", "img/hexagon_pink.png")
	.attr("x", -50)
	.attr("y", -50)
	.attr("height", 100)
	.attr("width", 100);
	
// Draw the person's name and position it inside the box
node.append("text")
	.attr("dx", -(boxWidth/2) + 10)
	.attr("dy", 0)
	.attr("text-anchor", "start")
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
