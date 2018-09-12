var boxWidth = 100,
    boxHeight = 40;

//console.log(treeData);

var treeDataJson    = JSON.parse(treeData);
var spouseDataJson  = JSON.parse(spouseDataString);
var famillyDataJson = JSON.parse(famillyDataString);



function createSliderIdMember()
{
	// Create the two images
	var twoImgDiv = document.createElement("div");
	twoImgDiv.classList.add("center");
	divSlider.appendChild(twoImgDiv);

	// Create the member id card button
	var memberIdCardImg = document.createElement("img");
	memberIdCardImg.id = "memberIdCardImg";
	memberIdCardImg.setAttribute("src", "img/identity-card_circle.png");
	memberIdCardImg.style.margin = "10px";
	memberIdCardImg.addEventListener("click", function()
	{
		memberIdCardImg.setAttribute("src", "img/identity-card_circle.png");
		additionalFilesImg.setAttribute("src", "img/folder.png");
		idMemberDiv.style.display = "";
		additionalFilesDiv.style.display = "none";
	});
	twoImgDiv.appendChild(memberIdCardImg);
	// Create the additional files button
	var additionalFilesImg = document.createElement("img");
	additionalFilesImg.id = "additionalFilesImg";
	additionalFilesImg.setAttribute("src", "img/folder.png");
	additionalFilesImg.style.margin = "10px";
	additionalFilesImg.addEventListener("click", function()
	{
		memberIdCardImg.setAttribute("src", "img/identity-card.png");
		additionalFilesImg.setAttribute("src", "img/folder_circle.png");
		idMemberDiv.style.display = "none";
		additionalFilesDiv.style.display = "";
	});
	twoImgDiv.appendChild(additionalFilesImg);

	// Create the id member div
	var idMemberDiv = document.createElement("div");
	divSlider.appendChild(idMemberDiv);

	// Create the firstLastName div
	var divFirstLastName = document.createElement("div");
	divFirstLastName.id = "firstLastName";
	divFirstLastName.classList.add("whitePencil");
	divFirstLastName.classList.add("center");
	idMemberDiv.appendChild(divFirstLastName);
	
	// Create the birth image
	var birthImg = document.createElement("img");
	birthImg.classList.add("center-img");
	birthImg.setAttribute("src", "img/stroller.png");
	idMemberDiv.appendChild(birthImg);
	// Create the birth date div
	var birthDateDiv = document.createElement("div");
	birthDateDiv.id = "birthDate";
	birthDateDiv.classList.add("whitePencil");
	birthDateDiv.classList.add("center");
	idMemberDiv.appendChild(birthDateDiv);
	// Create the birth place div
	var birthPlaceDiv = document.createElement("div");
	birthPlaceDiv.id = "birthPlace";
	birthPlaceDiv.classList.add("whitePencil");
	birthPlaceDiv.classList.add("center");
	idMemberDiv.appendChild(birthPlaceDiv);
	
	// Create the job image
	var jobImg = document.createElement("img");
	jobImg.id = "jobImg";
	jobImg.classList.add("center-img");
	jobImg.setAttribute("src", "img/office-briefcase.png");
	idMemberDiv.appendChild(jobImg);
	// Create the job div
	var jobDiv = document.createElement("div");
	jobDiv.id = "job";
	jobDiv.classList.add("whitePencil");
	jobDiv.classList.add("center");
	idMemberDiv.appendChild(jobDiv);
	
	// Create the union image
	var unionImg = document.createElement("img");
	unionImg.id = "unionImg";
	unionImg.classList.add("center-img");
	unionImg.setAttribute("src", "img/wedding.png");
	idMemberDiv.appendChild(unionImg);
	// Create the union date div
	var unionDateDiv = document.createElement("div");
	unionDateDiv.id = "unionDate";
	unionDateDiv.classList.add("whitePencil");
	unionDateDiv.classList.add("center");
	idMemberDiv.appendChild(unionDateDiv);
	// Create the union place div
	var unionPlaceDiv = document.createElement("div");
	unionPlaceDiv.id = "unionPlace";
	unionPlaceDiv.classList.add("whitePencil");
	unionPlaceDiv.classList.add("center");
	idMemberDiv.appendChild(unionPlaceDiv);
	
	// Create the union religous image
	var unionReligiousImg = document.createElement("img");
	unionReligiousImg.id = "unionReligiousImg";
	unionReligiousImg.classList.add("center-img");
	unionReligiousImg.setAttribute("src", "img/cross.png");
	idMemberDiv.appendChild(unionReligiousImg);
	// Create the union religous date div
	var unioReligousnDate = document.createElement("div");
	unioReligousnDate.id = "unioReligousnDate";
	unioReligousnDate.classList.add("whitePencil");
	unioReligousnDate.classList.add("center");
	idMemberDiv.appendChild(unioReligousnDate);
	// Create the union religous place 1 div
	var unionReligiousPlace1 = document.createElement("div");
	unionReligiousPlace1.id = "unionReligiousPlace1";
	unionReligiousPlace1.classList.add("whitePencil");
	unionReligiousPlace1.classList.add("center");
	idMemberDiv.appendChild(unionReligiousPlace1);
	// Create the union religous place 2 div
	var unionReligiousPlace2 = document.createElement("div");
	unionReligiousPlace2.id = "unionReligiousPlace2";
	unionReligiousPlace2.classList.add("whitePencil");
	unionReligiousPlace2.classList.add("center");
	idMemberDiv.appendChild(unionReligiousPlace2);
	
	// Create the death image
	var deathImg = document.createElement("img");
	deathImg.id = "deathImg";
	deathImg.classList.add("center-img");
	deathImg.setAttribute("src", "img/tombstone.png");
	idMemberDiv.appendChild(deathImg);
	// Create the death date div
	var deathDateDiv = document.createElement("div");
	deathDateDiv.id = "deathDate";
	deathDateDiv.classList.add("whitePencil");
	deathDateDiv.classList.add("center");
	idMemberDiv.appendChild(deathDateDiv);
	// Create the death place div
	var deathPlaceDiv = document.createElement("div");
	deathPlaceDiv.id = "deathPlace";
	deathPlaceDiv.classList.add("whitePencil");
	deathPlaceDiv.classList.add("center");
	idMemberDiv.appendChild(deathPlaceDiv);
	
	// Create the note image
	var noteImg = document.createElement("img");
	noteImg.id = "noteImg";
	noteImg.classList.add("center-img");
	noteImg.setAttribute("src", "img/writing.png");
	idMemberDiv.appendChild(noteImg);
	// Create the note div
	var noteDiv = document.createElement("div");
	noteDiv.id = "note";
	noteDiv.classList.add("whitePencil");
	noteDiv.classList.add("center");
	idMemberDiv.appendChild(noteDiv);
	
	// Create the additional files div and hide it
	var additionalFilesDiv = document.createElement("div");
	additionalFilesDiv.id = "additionalFilesDiv";
	additionalFilesDiv.classList.add("whitePencil");
	additionalFilesDiv.style.display = "none";
	divSlider.appendChild(additionalFilesDiv);
}







// Create the slider div
var divSlider = document.createElement("div");
divSlider.id = "slider";
divSlider.classList.add("slider");
// Add the slider to the document
document.getElementsByTagName("body")[0].appendChild(divSlider);
// Hide the slider
var slider = $('#slider').slideReveal();

createSliderIdMember();



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
	.append("g")
	.attr("id", "document");
	
// Add close button to svgDoc
d3.select("#svgDoc")
	.append("g")
	.append("image")
	.attr("xlink:href", "img/cross-mark-on-a-black-circle-background.png")
	.attr("x", 10)
	.attr("y", 10)
	.attr("width", 50)
	.attr("height", 50)
	.on("click", function()
	{
		// Hide the svgDoc
		d3.select("#svgDoc").style("display", "none");
		
		// Remove the loaded document
		d3.select("#document").html("");
	});
	
	


async function showDocument(docName)
{
	// Display the svgDoc
	d3.select("#svgDoc").style("display", "block");
	
	var docPath = "data/doc/" + docName;	
	var docEncrypted = await readFile(docPath);
	var data = await decrypt(docEncrypted, password);
	
	svgDoc.append("image")
	.attr("xlink:href", "data:image/png;base64," + data)
	.attr("x", 0)
	.attr("y", 0);

}




var nodeWidth  = 220;
var nodeHeight = 200;

var tree = d3.layout.tree()
  .nodeSize([nodeWidth, nodeHeight])
  .separation(function(a, b){ if (a.remove || b.remove) return 0.5; if(a.parents == b.parents) return 1.; else return 2. })
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


function addAdditionalFiles(node)
{
	if(!node.title)
	{
		console.log("error, there is no title");
		return;
	}
		
	var additionalFilesDiv = document.getElementById("additionalFilesDiv");
	var fileDiv = document.createElement("div");
	
	// Create the file image
	var fileImg = document.createElement("img");
	fileImg.setAttribute("src", "img/file.png");
	fileImg.addEventListener("click", function() { showDocument(node.fileName) } );
	fileDiv.appendChild(fileImg);
	
	// Create the title
	var fileTitle = document.createTextNode(node.title);
	fileDiv.appendChild(fileTitle);
	
	additionalFilesDiv.appendChild(fileDiv);
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
		// Fill the slider --------------------------------------
		// Name
		$('#firstLastName').html(d.firstname + " " + d.lastname);
		
		// Birth
		$('#birthDate').html(d.birthDate);
		if(d.birthPlace) { $("#birthPlace").show(); $('#birthPlace').html(d.birthPlace); } else $("#birthPlace").hide();
		
		// Job
		if(!d.job) { $('#jobImg').hide(); $('#job').hide(); } else { $('#jobImg').show(); $('#job').show(); $('#job').html(d.job); }
		
		// Union
		if(!d.unionDate && !d.unionPlace) { $('#unionImg').hide();                       } else $('#unionImg').show();
		if(d.unionDate)   { $("#unionDate").show();  $('#unionDate').html(d.unionDate)   } else $("#unionDate").hide();
		if(d.unionPlace)  { $("#unionPlace").show(); $('#unionPlace').html(d.unionPlace) } else $("#unionPlace").hide();
		
		// Union Religious
		if(!d.unionReligiousDate && !d.unionReligiousPlace1 && unionReligiousPlace2) { $('#unionReligiousImg').hide();           } else $('#unionReligiousImg').show();
		if(d.unionReligious)        { if(d.unionReligious == "Christian") $("#unionReligiousImg").attr("src", "img/cross.png");  } else $('#unionReligiousImg').hide();
		if(d.unionReligiousDate)    { $("#unionReligiousDate").show();   $('#unionReligiousDate').html(d.unionReligiousDate)     } else $("#unionReligiousDate").hide();
		if(d.unionReligiousPlace1)  { $("#unionReligiousPlace1").show(); $('#unionReligiousPlace1').html(d.unionReligiousPlace1) } else $("#unionReligiousPlace1").hide();
		if(d.unionReligiousPlace2)  { $("#unionReligiousPlace2").show(); $('#unionReligiousPlace2').html(d.unionReligiousPlace2) } else $("#unionReligiousPlace2").hide();
		
		// Death
		if(!d.deathDate && !d.deathPlace) { $('#deathImg').hide();                      } else $('#deathImg').show();
		if(d.deathDate)  { $("#deathDate").show();  $('#deathDate').html(d.deathDate)   } else $("#deathDate").hide();
		if(d.deathPlace) { $("#deathPlace").show(); $('#deathPlace').html(d.deathPlace) } else $("#deathPlace").hide();
		
		// Note
		if(!d.note) { $('#noteImg').hide(); $('#note').hide(); } else { $('#noteImg').show(); $('#note').show(); $('#note').html(d.note); }
		
		// Remove old additional files
		$("#additionalFilesDiv").html("");
		// Add additional files
		if(d.additionalFiles) { d.additionalFiles.forEach(addAdditionalFiles); };

		// Show the slider
		var slider = $('#slider').slideReveal();
		slider.slideReveal("show");
	});



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
