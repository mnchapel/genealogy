$.getScript("js/parse.js")

parseTree();

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
  // Left padding of tree so that the whole root node is on the screen.
  // TODO: find a better way
  .attr("transform", "translate(150,200)");

var tree = d3.layout.tree()
  // Using nodeSize we are able to control
  // the separation between nodes. If we used
  // the size parameter instead then d3 would
  // calculate the separation dynamically to fill
  // the available space.
  .nodeSize([175, 150])
  // By default, cousins are drawn further apart than siblings.
  // By returning the same value in all cases, we draw cousins
  // the same distance apart as siblings.
  .separation(function(){ return 1.; })
  // Tell d3 what the child nodes are. Remember, we're drawing
  // a tree so the ancestors are child nodes.
  .children(function(person){ return person._parents; });

d3.json('https://raw.githubusercontent.com/justincy/d3-pedigree-examples/gh-pages/data/4gens.json', function(error, json){
  
	if(error) {
		return console.error(error);
	}
  
	var nodes = tree.nodes(json), links = tree.links(nodes);

	// Style links (edges)
	svg.selectAll("path.link")
		.data(links)
		.enter().append("path")
		.attr("class", "link")
		.attr("d", elbow);

	// Style nodes    
	var node = svg.selectAll("g.person")
		.data(nodes)
		.enter().append("g")
		.attr("class", "person")
		.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
	  
	// Draw the circle
	node.append("circle")
		.attr("r", 50)
		.attr("fill" , "#e78a91");
		
	// Draw the person's name and position it inside the box
	node.append("text")
		.attr("dx", -(boxWidth/2) + 10)
		.attr("dy", 0)
		.attr("text-anchor", "start")
		.attr('class', 'name')
		.text(function(d) { return d.name; });
      
});
    
/**
 * Custom path function that creates straight connecting lines.
 */
function elbow(d) {
  return "M" + d.source.x + "," + d.source.y
    + "V" + (d.source.y + (d.target.y-d.source.y)/2)
    + "H" + d.target.x 
    + "V" + d.target.y;
}
