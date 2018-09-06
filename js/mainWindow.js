var boxWidth = 100,
    boxHeight = 40;

//console.log(treeData);

var treeDataJson    = JSON.parse(treeData);
var spouseDataJson  = JSON.parse(spouseDataString);
var famillyDataJson = JSON.parse(famillyDataString);




// Create the slider div
var divSlider = document.createElement("div");
divSlider.id = "slider";
divSlider.classList.add("slider");
// Create the firstLastName div
var divFirstLastName = document.createElement("div");
divFirstLastName.id = "firstLastName";
divFirstLastName.classList.add("whitePencil");
divFirstLastName.classList.add("center");
divSlider.appendChild(divFirstLastName);
// Create the birth image
var birthImg = document.createElement("img");
birthImg.classList.add("center-img");
birthImg.setAttribute("src", "img/stroller.png");
divSlider.appendChild(birthImg);
// Create the birth date div
var birthDateDiv = document.createElement("div");
birthDateDiv.id = "birthDate";
birthDateDiv.classList.add("whitePencil");
birthDateDiv.classList.add("center");
divSlider.appendChild(birthDateDiv);
// Create the birth place div
var birthPlaceDiv = document.createElement("div");
birthPlaceDiv.id = "birthPlace";
birthPlaceDiv.classList.add("whitePencil");
birthPlaceDiv.classList.add("center");
divSlider.appendChild(birthPlaceDiv);
// Create the birth look image
var birthLookImg = document.createElement("img");
birthLookImg.id = "birthLook",
birthLookImg.classList.add("center-img-look");
birthLookImg.setAttribute("src", "img/visible-opened-eye-interface-option.png");
divSlider.appendChild(birthLookImg);
// Create the job image
var jobImg = document.createElement("img");
jobImg.id = "jobImg";
jobImg.classList.add("center-img");
jobImg.setAttribute("src", "img/office-briefcase.png");
divSlider.appendChild(jobImg);
// Create the job div
var jobDiv = document.createElement("div");
jobDiv.id = "job";
jobDiv.classList.add("whitePencil");
jobDiv.classList.add("center");
divSlider.appendChild(jobDiv);
// Create the union image
var unionImg = document.createElement("img");
unionImg.id = "unionImg";
unionImg.classList.add("center-img");
unionImg.setAttribute("src", "img/wedding.png");
divSlider.appendChild(unionImg);
// Create the union date div
var unionDateDiv = document.createElement("div");
unionDateDiv.id = "unionDate";
unionDateDiv.classList.add("whitePencil");
unionDateDiv.classList.add("center");
divSlider.appendChild(unionDateDiv);
// Create the union place div
var unionPlaceDiv = document.createElement("div");
unionPlaceDiv.id = "unionPlace";
unionPlaceDiv.classList.add("whitePencil");
unionPlaceDiv.classList.add("center");
divSlider.appendChild(unionPlaceDiv);
// Create the death image
var deathImg = document.createElement("img");
deathImg.id = "deathImg";
deathImg.classList.add("center-img");
deathImg.setAttribute("src", "img/tombstone.png");
divSlider.appendChild(deathImg);
// Create the death date div
var deathDateDiv = document.createElement("div");
deathDateDiv.id = "deathDate";
deathDateDiv.classList.add("whitePencil");
deathDateDiv.classList.add("center");
divSlider.appendChild(deathDateDiv);
// Create the death place div
var deathPlaceDiv = document.createElement("div");
deathPlaceDiv.id = "deathPlace";
deathPlaceDiv.classList.add("whitePencil");
deathPlaceDiv.classList.add("center");
divSlider.appendChild(deathPlaceDiv);
// Create the note image
var noteImg = document.createElement("img");
noteImg.id = "noteImg";
noteImg.classList.add("center-img");
noteImg.setAttribute("src", "img/writing.png");
divSlider.appendChild(noteImg);
// Create the note div
var noteDiv = document.createElement("div");
noteDiv.id = "note";
noteDiv.classList.add("whitePencil");
noteDiv.classList.add("center");
divSlider.appendChild(noteDiv);
// Add the slider to the document
document.getElementsByTagName("body")[0].appendChild(divSlider);

// Hide the slider
var slider = $('#slider').slideReveal();



/*// Create svg doc
var svgDoc = document.createElement("svg");
svgDoc.id = "svgDoc";
svgDoc.classList.add("svgDoc");
svgDoc.setAttribute("width", "100%");
svgDoc.setAttribute("height", "100%");
svgDoc.style.display = "none";
// Add the svg to the document
document.getElementsByTagName("body")[0].appendChild(svgDoc);*/






// Setup zoom and pan
var zoom = d3.behavior.zoom()
	.scaleExtent([.1,1])
	.on('zoom', function()
	{
		svg.attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
	})
	// Offset so that first pan and zoom does not jump back to the origin
	.translate([-1000, 800]);
	
// Setup zoom and pan
var zoomDoc = d3.behavior.zoom()
	.scaleExtent([.1,1])
	.on('zoom', function()
	{
		svgDoc.attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
	});



var svg = d3.select("body").append("svg")
	.attr("width", "100%")
	.attr("height", "100%")
	.attr("position", "absolute")
	.call(zoom)
	.append("g")
	.attr("transform", "translate(-1000,800)");
	

console.log("test");
var svgDoc = d3.select("body").append("svg")
	.attr("id", "svgDoc")
	.attr("class", "svgDoc")
	.attr("width", "100%")
	.attr("height", "100%")
	.attr("position", "absolute")
	.style("display", "none")
	.call(zoomDoc)
	.append("g");
	
	


async function showDocument(docName)
{
	d3.select("#svgDoc").style("display", "block");
	
	var docPath = "data/doc/" + docName;	
	//var docEncrypted = readFile(docPath);
	//var document = decrypt(docEncrypted, password);
	
	svgDoc.append("img")
	.attr("src", "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEVBMTczNDg3QzA5MTFFNjk3ODM5NjQyRjE2RjA3QTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEVBMTczNDk3QzA5MTFFNjk3ODM5NjQyRjE2RjA3QTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRUExNzM0NjdDMDkxMUU2OTc4Mzk2NDJGMTZGMDdBOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRUExNzM0NzdDMDkxMUU2OTc4Mzk2NDJGMTZGMDdBOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjjUmssAAAGASURBVHjatJaxTsMwEIbpIzDA6FaMMPYJkDKzVYU+QFeEGPIKfYU8AETkCYI6wANkZQwIKRNDB1hA0Jrf0rk6WXZ8BvWkb4kv99vn89kDrfVexBSYgVNwDA7AN+jAK3gEd+AlGMGIBFDgFvzouK3JV/lihQTOwLtOtw9wIRG5pJn91Tbgqk9kSk7GViADrTD4HCyZ0NQnomi51sb0fUyCMQEbp2WpU67IjfNjwcYyoUDhjJVcZBjYBy40j4wXgaobWoe8Z6Y80CJBwFpunepIzt2AUgFjtXXshNXjVmMh+K+zzp/CMs0CqeuzrxSRpbOKfdCkiMTS1VBQ41uxMyQR2qbrXiiwYN3ACh1FDmsdK2Eu4J6Tlo31dYVtCY88h5ELZIJJ+IRMzBHfyJINrigNkt5VsRiub9nXICdsYyVd2NcVvA3ScE5t2rb5JuEeyZnAhmLt9NK63vX1O5Pe8XaPSuGq1uTrfUgMEp9EJ+CQvr+BJ/AAKvAcCiAR+bf9CjAAluzmdX4AEIIAAAAASUVORK5CYII=")
	.attr("x", 0)
	.attr("y", 0);

}




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


// Style nodes    
var node = svg.selectAll("g.person")
	.data(nodes)
	.enter().append("g")
	.attr("class", "person")
	.attr("transform", function(d) { return "translate(" + d.x + "," + -d.y + ")"; })
	.on("click", function(d)
	{
		// Fill the slider
		$('#firstLastName').html(d.firstname + " " + d.lastname);
		$('#birthDate').html(d.birthDate);
		if(d.birthPlace) { $("#birthPlace").show(); $('#birthPlace').html(d.birthPlace); } else $("#birthPlace").hide();
		if(d.birthDoc) { $("#birthLook").show(); $("#birthLook").click(function(){ showDocument(d.birthDoc) }); } else $("#birthLook").hide();
		if(!d.job) { $('#jobImg').hide(); $('#job').hide(); } else { $('#jobImg').show(); $('#job').show(); $('#job').html(d.job); }
		if(!d.unionDate && !d.unionPlace) { $('#unionImg').hide(); } else { $('#unionImg').show(); }
		if(d.unionDate)  { $("#unionDate").show();  $('#unionDate').html(d.unionDate)    } else $("#unionDate").hide();
		if(d.unionDate)  { $("#unionPlace").show(); $('#unionPlace').html(d.unionPlace)   } else $("#unionPlace").hide();
		if(!d.deathDate && !d.deathPlace) { $('#deathImg').hide(); } else { $('#deathImg').show(); }
		if(d.deathDate)  { $("#deathDate").show();  $('#deathDate').html(d.deathDate)   } else $("#deathDate").hide();
		if(d.deathPlace) { $("#deathPlace").show(); $('#deathPlace').html(d.deathPlace)  } else $("#deathPlace").hide();
		if(!d.note) { $('#noteImg').hide(); $('#note').hide(); } else { $('#noteImg').show(); $('#note').show(); $('#note').html(d.note); }

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
		if(d.hidden)
			return "";

		var firstname = d.firstname.split(" ");
		return firstname[0];
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
				.y(function(d){ return -d.y; })
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
				.y(function(d){ return -d.y; })
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
