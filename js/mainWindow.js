var boxWidth = 100,
    boxHeight = 40;

var treeDataJson    = JSON.parse(treeData);
var spouseDataJson  = JSON.parse(spouseDataString);
var famillyDataJson = JSON.parse(famillyDataString);

//console.log(treeData);




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
	.call(zoom)
	.append("g");
	
	


async function showDocument(docName)
{
	d3.select("#svgDoc").style("display", "block");
	
	var docPath = "data/doc/" + docName;	
	//var docEncrypted = readFile(docPath);
	//var document = decrypt(docEncrypted, password);
	
	svgDoc.append("image")
	.attr("src", "data:image/png;base64, VmVyc2lvbjogSW1hZ2VNYWdpY2sgNi45LjctNCBRMTYgeDg2XzY0IDIwMTcwMTE0IGh0dHA6Ly93 \
d3cuaW1hZ2VtYWdpY2sub3JnCkNvcHlyaWdodDogwqkgMTk5OS0yMDE3IEltYWdlTWFnaWNrIFN0 \
dWRpbyBMTEMKTGljZW5zZTogaHR0cDovL3d3dy5pbWFnZW1hZ2ljay5vcmcvc2NyaXB0L2xpY2Vu \
c2UucGhwCkZlYXR1cmVzOiBDaXBoZXIgRFBDIE1vZHVsZXMgT3Blbk1QIApEZWxlZ2F0ZXMgKGJ1 \
aWx0LWluKTogYnpsaWIgZGp2dSBmZnR3IGZvbnRjb25maWcgZnJlZXR5cGUgamJpZyBqbmcganBl \
ZyBsY21zIGxxciBsdGRsIGx6bWEgb3BlbmV4ciBwYW5nb2NhaXJvIHBuZyB0aWZmIHdtZiB4IHht \
bCB6bGliClVzYWdlOiBjb252ZXJ0LWltNi5xMTYgW29wdGlvbnMgLi4uXSBmaWxlIFsgW29wdGlv \
bnMgLi4uXSBmaWxlIC4uLl0gW29wdGlvbnMgLi4uXSBmaWxlCgpJbWFnZSBTZXR0aW5nczoKICAt \
YWRqb2luICAgICAgICAgICAgICBqb2luIGltYWdlcyBpbnRvIGEgc2luZ2xlIG11bHRpLWltYWdl \
IGZpbGUKICAtYWZmaW5lIG1hdHJpeCAgICAgICBhZmZpbmUgdHJhbnNmb3JtIG1hdHJpeAogIC1h \
bHBoYSBvcHRpb24gICAgICAgIGFjdGl2YXRlLCBkZWFjdGl2YXRlLCByZXNldCwgb3Igc2V0IHRo \
ZSBhbHBoYSBjaGFubmVsCiAgLWFudGlhbGlhcyAgICAgICAgICAgcmVtb3ZlIHBpeGVsLWFsaWFz \
aW5nCiAgLWF1dGhlbnRpY2F0ZSBwYXNzd29yZAogICAgICAgICAgICAgICAgICAgICAgIGRlY2lw \
aGVyIGltYWdlIHdpdGggdGhpcyBwYXNzd29yZAogIC1hdHRlbnVhdGUgdmFsdWUgICAgIGxlc3Nl \
biAob3IgaW50ZW5zaWZ5KSB3aGVuIGFkZGluZyBub2lzZSB0byBhbiBpbWFnZQogIC1iYWNrZ3Jv \
dW5kIGNvbG9yICAgIGJhY2tncm91bmQgY29sb3IKICAtYmlhcyB2YWx1ZSAgICAgICAgICBhZGQg \
YmlhcyB3aGVuIGNvbnZvbHZpbmcgYW4gaW1hZ2UKICAtYmxhY2stcG9pbnQtY29tcGVuc2F0aW9u \
CiAgICAgICAgICAgICAgICAgICAgICAgdXNlIGJsYWNrIHBvaW50IGNvbXBlbnNhdGlvbgogIC1i \
bHVlLXByaW1hcnkgcG9pbnQgIGNocm9tYXRpY2l0eSBibHVlIHByaW1hcnkgcG9pbnQKICAtYm9y \
ZGVyY29sb3IgY29sb3IgICBib3JkZXIgY29sb3IKICAtY2FwdGlvbiBzdHJpbmcgICAgICBhc3Np \
Z24gYSBjYXB0aW9uIHRvIGFuIGltYWdlCiAgLWNoYW5uZWwgdHlwZSAgICAgICAgYXBwbHkgb3B0 \
aW9uIHRvIHNlbGVjdCBpbWFnZSBjaGFubmVscwogIC1jbGlwLW1hc2sgZmlsZW5hbWUgIGFzc29j \
aWF0ZSBhIGNsaXAgbWFzayB3aXRoIHRoZSBpbWFnZQogIC1jb2xvcnMgdmFsdWUgICAgICAgIHBy \
ZWZlcnJlZCBudW1iZXIgb2YgY29sb3JzIGluIHRoZSBpbWFnZQogIC1jb2xvcnNwYWNlIHR5cGUg \
ICAgIGFsdGVybmF0ZSBpbWFnZSBjb2xvcnNwYWNlCiAgLWNvbW1lbnQgc3RyaW5nICAgICAgYW5u \
b3RhdGUgaW1hZ2Ugd2l0aCBjb21tZW50CiAgLWNvbXBvc2Ugb3BlcmF0b3IgICAgc2V0IGltYWdl \
IGNvbXBvc2l0ZSBvcGVyYXRvcgogIC1jb21wcmVzcyB0eXBlICAgICAgIHR5cGUgb2YgcGl4ZWwg \
Y29tcHJlc3Npb24gd2hlbiB3cml0aW5nIHRoZSBpbWFnZQogIC1kZWZpbmUgZm9ybWF0Om9wdGlv \
bgogICAgICAgICAgICAgICAgICAgICAgIGRlZmluZSBvbmUgb3IgbW9yZSBpbWFnZSBmb3JtYXQg \
b3B0aW9ucwogIC1kZWxheSB2YWx1ZSAgICAgICAgIGRpc3BsYXkgdGhlIG5leHQgaW1hZ2UgYWZ0 \
ZXIgcGF1c2luZwogIC1kZW5zaXR5IGdlb21ldHJ5ICAgIGhvcml6b250YWwgYW5kIHZlcnRpY2Fs \
IGRlbnNpdHkgb2YgdGhlIGltYWdlCiAgLWRlcHRoIHZhbHVlICAgICAgICAgaW1hZ2UgZGVwdGgK \
ICAtZGlyZWN0aW9uIHR5cGUgICAgICByZW5kZXIgdGV4dCByaWdodC10by1sZWZ0IG9yIGxlZnQt \
dG8tcmlnaHQKICAtZGlzcGxheSBzZXJ2ZXIgICAgICBnZXQgaW1hZ2Ugb3IgZm9udCBmcm9tIHRo \
aXMgWCBzZXJ2ZXIKICAtZGlzcG9zZSBtZXRob2QgICAgICBsYXllciBkaXNwb3NhbCBtZXRob2QK \
ICAtZGl0aGVyIG1ldGhvZCAgICAgICBhcHBseSBlcnJvciBkaWZmdXNpb24gdG8gaW1hZ2UKICAt \
ZW5jb2RpbmcgdHlwZSAgICAgICB0ZXh0IGVuY29kaW5nIHR5cGUKICAtZW5kaWFuIHR5cGUgICAg \
ICAgICBlbmRpYW5uZXNzIChNU0Igb3IgTFNCKSBvZiB0aGUgaW1hZ2UKICAtZmFtaWx5IG5hbWUg \
ICAgICAgICByZW5kZXIgdGV4dCB3aXRoIHRoaXMgZm9udCBmYW1pbHkKICAtZmlsbCBjb2xvciAg \
ICAgICAgICBjb2xvciB0byB1c2Ugd2hlbiBmaWxsaW5nIGEgZ3JhcGhpYyBwcmltaXRpdmUKICAt \
ZmlsdGVyIHR5cGUgICAgICAgICB1c2UgdGhpcyBmaWx0ZXIgd2hlbiByZXNpemluZyBhbiBpbWFn \
ZQogIC1mb250IG5hbWUgICAgICAgICAgIHJlbmRlciB0ZXh0IHdpdGggdGhpcyBmb250CiAgLWZv \
cm1hdCAic3RyaW5nIiAgICAgb3V0cHV0IGZvcm1hdHRlZCBpbWFnZSBjaGFyYWN0ZXJpc3RpY3MK \
ICAtZnV6eiBkaXN0YW5jZSAgICAgICBjb2xvcnMgd2l0aGluIHRoaXMgZGlzdGFuY2UgYXJlIGNv \
bnNpZGVyZWQgZXF1YWwKICAtZ3Jhdml0eSB0eXBlICAgICAgICBob3Jpem9udGFsIGFuZCB2ZXJ0 \
aWNhbCB0ZXh0IHBsYWNlbWVudAogIC1ncmVlbi1wcmltYXJ5IHBvaW50IGNocm9tYXRpY2l0eSBn \
cmVlbiBwcmltYXJ5IHBvaW50CiAgLWludGVuc2l0eSBtZXRob2QgICAgbWV0aG9kIHRvIGdlbmVy \
YXRlIGludGVuc2l0eSB2YWx1ZSBmcm9tIHBpeGVsCiAgLWludGVudCB0eXBlICAgICAgICAgdHlw \
ZSBvZiByZW5kZXJpbmcgaW50ZW50IHdoZW4gbWFuYWdpbmcgdGhlIGltYWdlIGNvbG9yCiAgLWlu \
dGVybGFjZSB0eXBlICAgICAgdHlwZSBvZiBpbWFnZSBpbnRlcmxhY2luZyBzY2hlbWUKICAtaW50 \
ZXJsaW5lLXNwYWNpbmcgdmFsdWUKICAgICAgICAgICAgICAgICAgICAgICBzZXQgdGhlIHNwYWNl \
IGJldHdlZW4gdHdvIHRleHQgbGluZXMKICAtaW50ZXJwb2xhdGUgbWV0aG9kICBwaXhlbCBjb2xv \
ciBpbnRlcnBvbGF0aW9uIG1ldGhvZAogIC1pbnRlcndvcmQtc3BhY2luZyB2YWx1ZQogICAgICAg \
ICAgICAgICAgICAgICAgIHNldCB0aGUgc3BhY2UgYmV0d2VlbiB0d28gd29yZHMKICAta2Vybmlu \
ZyB2YWx1ZSAgICAgICBzZXQgdGhlIHNwYWNlIGJldHdlZW4gdHdvIGxldHRlcnMKICAtbGFiZWwg \
c3RyaW5nICAgICAgICBhc3NpZ24gYSBsYWJlbCB0byBhbiBpbWFnZQogIC1saW1pdCB0eXBlIHZh \
bHVlICAgIHBpeGVsIGNhY2hlIHJlc291cmNlIGxpbWl0CiAgLWxvb3AgaXRlcmF0aW9ucyAgICAg \
YWRkIE5ldHNjYXBlIGxvb3AgZXh0ZW5zaW9uIHRvIHlvdXIgR0lGIGFuaW1hdGlvbgogIC1tYXNr \
IGZpbGVuYW1lICAgICAgIGFzc29jaWF0ZSBhIG1hc2sgd2l0aCB0aGUgaW1hZ2UKICAtbWF0dGUg \
ICAgICAgICAgICAgICBzdG9yZSBtYXR0ZSBjaGFubmVsIGlmIHRoZSBpbWFnZSBoYXMgb25lCiAg \
LW1hdHRlY29sb3IgY29sb3IgICAgZnJhbWUgY29sb3IKICAtbW9tZW50cyAgICAgICAgICAgICBy \
ZXBvcnQgaW1hZ2UgbW9tZW50cwogIC1tb25pdG9yICAgICAgICAgICAgIG1vbml0b3IgcHJvZ3Jl \
c3MKICAtb3JpZW50IHR5cGUgICAgICAgICBpbWFnZSBvcmllbnRhdGlvbgogIC1wYWdlIGdlb21l \
dHJ5ICAgICAgIHNpemUgYW5kIGxvY2F0aW9uIG9mIGFuIGltYWdlIGNhbnZhcyAoc2V0dGluZykK \
ICAtcGluZyAgICAgICAgICAgICAgICBlZmZpY2llbnRseSBkZXRlcm1pbmUgaW1hZ2UgYXR0cmli \
dXRlcwogIC1wb2ludHNpemUgdmFsdWUgICAgIGZvbnQgcG9pbnQgc2l6ZQogIC1wcmVjaXNpb24g \
dmFsdWUgICAgIG1heGltdW0gbnVtYmVyIG9mIHNpZ25pZmljYW50IGRpZ2l0cyB0byBwcmludAog \
IC1wcmV2aWV3IHR5cGUgICAgICAgIGltYWdlIHByZXZpZXcgdHlwZQogIC1xdWFsaXR5IHZhbHVl \
ICAgICAgIEpQRUcvTUlGRi9QTkcgY29tcHJlc3Npb24gbGV2ZWwKICAtcXVpZXQgICAgICAgICAg \
ICAgICBzdXBwcmVzcyBhbGwgd2FybmluZyBtZXNzYWdlcwogIC1yZWQtcHJpbWFyeSBwb2ludCAg \
IGNocm9tYXRpY2l0eSByZWQgcHJpbWFyeSBwb2ludAogIC1yZWdhcmQtd2FybmluZ3MgICAgIHBh \
eSBhdHRlbnRpb24gdG8gd2FybmluZyBtZXNzYWdlcwogIC1yZW1hcCBmaWxlbmFtZSAgICAgIHRy \
YW5zZm9ybSBpbWFnZSBjb2xvcnMgdG8gbWF0Y2ggdGhpcyBzZXQgb2YgY29sb3JzCiAgLXJlc3Bl \
Y3QtcGFyZW50aGVzZXMgc2V0dGluZ3MgcmVtYWluIGluIGVmZmVjdCB1bnRpbCBwYXJlbnRoZXNp \
cyBib3VuZGFyeQogIC1zYW1wbGluZy1mYWN0b3IgZ2VvbWV0cnkKICAgICAgICAgICAgICAgICAg \
ICAgICBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBzYW1wbGluZyBmYWN0b3IKICAtc2NlbmUgdmFs \
dWUgICAgICAgICBpbWFnZSBzY2VuZSBudW1iZXIKICAtc2VlZCB2YWx1ZSAgICAgICAgICBzZWVk \
IGEgbmV3IHNlcXVlbmNlIG9mIHBzZXVkby1yYW5kb20gbnVtYmVycwogIC1zaXplIGdlb21ldHJ5 \
ICAgICAgIHdpZHRoIGFuZCBoZWlnaHQgb2YgaW1hZ2UKICAtc3RyZXRjaCB0eXBlICAgICAgICBy \
ZW5kZXIgdGV4dCB3aXRoIHRoaXMgZm9udCBzdHJldGNoCiAgLXN0cm9rZSBjb2xvciAgICAgICAg \
Z3JhcGhpYyBwcmltaXRpdmUgc3Ryb2tlIGNvbG9yCiAgLXN0cm9rZXdpZHRoIHZhbHVlICAgZ3Jh \
cGhpYyBwcmltaXRpdmUgc3Ryb2tlIHdpZHRoCiAgLXN0eWxlIHR5cGUgICAgICAgICAgcmVuZGVy \
IHRleHQgd2l0aCB0aGlzIGZvbnQgc3R5bGUKICAtc3VwcG9ydCBmYWN0b3IgICAgICByZXNpemUg \
c3VwcG9ydDogPiAxLjAgaXMgYmx1cnJ5LCA8IDEuMCBpcyBzaGFycAogIC1zeW5jaHJvbml6ZSAg \
ICAgICAgIHN5bmNocm9uaXplIGltYWdlIHRvIHN0b3JhZ2UgZGV2aWNlCiAgLXRhaW50ICAgICAg \
ICAgICAgICAgZGVjbGFyZSB0aGUgaW1hZ2UgYXMgbW9kaWZpZWQKICAtdGV4dHVyZSBmaWxlbmFt \
ZSAgICBuYW1lIG9mIHRleHR1cmUgdG8gdGlsZSBvbnRvIHRoZSBpbWFnZSBiYWNrZ3JvdW5kCiAg \
LXRpbGUtb2Zmc2V0IGdlb21ldHJ5CiAgICAgICAgICAgICAgICAgICAgICAgdGlsZSBvZmZzZXQK \
ICAtdHJlZWRlcHRoIHZhbHVlICAgICBjb2xvciB0cmVlIGRlcHRoCiAgLXRyYW5zcGFyZW50LWNv \
bG9yIGNvbG9yCiAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgY29sb3IKICAtdW5k \
ZXJjb2xvciBjb2xvciAgICBhbm5vdGF0aW9uIGJvdW5kaW5nIGJveCBjb2xvcgogIC11bml0cyB0 \
eXBlICAgICAgICAgIHRoZSB1bml0cyBvZiBpbWFnZSByZXNvbHV0aW9uCiAgLXZlcmJvc2UgICAg \
ICAgICAgICAgcHJpbnQgZGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGltYWdlCiAgLXZp \
ZXcgICAgICAgICAgICAgICAgRmxhc2hQaXggdmlld2luZyB0cmFuc2Zvcm1zCiAgLXZpcnR1YWwt \
cGl4ZWwgbWV0aG9kCiAgICAgICAgICAgICAgICAgICAgICAgdmlydHVhbCBwaXhlbCBhY2Nlc3Mg \
bWV0aG9kCiAgLXdlaWdodCB0eXBlICAgICAgICAgcmVuZGVyIHRleHQgd2l0aCB0aGlzIGZvbnQg \
d2VpZ2h0CiAgLXdoaXRlLXBvaW50IHBvaW50ICAgY2hyb21hdGljaXR5IHdoaXRlIHBvaW50CgpJ \
bWFnZSBPcGVyYXRvcnM6CiAgLWFkYXB0aXZlLWJsdXIgZ2VvbWV0cnkKICAgICAgICAgICAgICAg \
ICAgICAgICBhZGFwdGl2ZWx5IGJsdXIgcGl4ZWxzOyBkZWNyZWFzZSBlZmZlY3QgbmVhciBlZGdl \
cwogIC1hZGFwdGl2ZS1yZXNpemUgZ2VvbWV0cnkKICAgICAgICAgICAgICAgICAgICAgICBhZGFw \
dGl2ZWx5IHJlc2l6ZSBpbWFnZSB1c2luZyAnbWVzaCcgaW50ZXJwb2xhdGlvbgogIC1hZGFwdGl2 \
ZS1zaGFycGVuIGdlb21ldHJ5CiAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVseSBzaGFy \
cGVuIHBpeGVsczsgaW5jcmVhc2UgZWZmZWN0IG5lYXIgZWRnZXMKICAtYWxwaGEgb3B0aW9uICAg \
ICAgICBvbiwgYWN0aXZhdGUsIG9mZiwgZGVhY3RpdmF0ZSwgc2V0LCBvcGFxdWUsIGNvcHkKICAg \
ICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCwgZXh0cmFjdCwgYmFja2dyb3VuZCwgb3Ig \
c2hhcGUKICAtYW5ub3RhdGUgZ2VvbWV0cnkgdGV4dAogICAgICAgICAgICAgICAgICAgICAgIGFu \
bm90YXRlIHRoZSBpbWFnZSB3aXRoIHRleHQKICAtYXV0by1nYW1tYSAgICAgICAgICBhdXRvbWFn \
aWNhbGx5IGFkanVzdCBnYW1tYSBsZXZlbCBvZiBpbWFnZQogIC1hdXRvLWxldmVsICAgICAgICAg \
IGF1dG9tYWdpY2FsbHkgYWRqdXN0IGNvbG9yIGxldmVscyBvZiBpbWFnZQogIC1hdXRvLW9yaWVu \
dCAgICAgICAgIGF1dG9tYWdpY2FsbHkgb3JpZW50IChyb3RhdGUpIGltYWdlCiAgLWJlbmNoIGl0 \
ZXJhdGlvbnMgICAgbWVhc3VyZSBwZXJmb3JtYW5jZQogIC1ibGFjay10aHJlc2hvbGQgdmFsdWUK \
ICAgICAgICAgICAgICAgICAgICAgICBmb3JjZSBhbGwgcGl4ZWxzIGJlbG93IHRoZSB0aHJlc2hv \
bGQgaW50byBibGFjawogIC1ibHVlLXNoaWZ0IGZhY3RvciAgIHNpbXVsYXRlIGEgc2NlbmUgYXQg \
bmlnaHR0aW1lIGluIHRoZSBtb29ubGlnaHQKICAtYmx1ciBnZW9tZXRyeSAgICAgICByZWR1Y2Ug \
aW1hZ2Ugbm9pc2UgYW5kIHJlZHVjZSBkZXRhaWwgbGV2ZWxzCiAgLWJvcmRlciBnZW9tZXRyeSAg \
ICAgc3Vycm91bmQgaW1hZ2Ugd2l0aCBhIGJvcmRlciBvZiBjb2xvcgogIC1ib3JkZXJjb2xvciBj \
b2xvciAgIGJvcmRlciBjb2xvcgogIC1icmlnaHRuZXNzLWNvbnRyYXN0IGdlb21ldHJ5CiAgICAg \
ICAgICAgICAgICAgICAgICAgaW1wcm92ZSBicmlnaHRuZXNzIC8gY29udHJhc3Qgb2YgdGhlIGlt \
YWdlCiAgLWNhbm55IGdlb21ldHJ5ICAgICAgZGV0ZWN0IGVkZ2VzIGluIHRoZSBpbWFnZQogIC1j \
ZGwgZmlsZW5hbWUgICAgICAgIGNvbG9yIGNvcnJlY3Qgd2l0aCBhIGNvbG9yIGRlY2lzaW9uIGxp \
c3QKICAtY2hhcmNvYWwgcmFkaXVzICAgICBzaW11bGF0ZSBhIGNoYXJjb2FsIGRyYXdpbmcKICAt \
Y2hvcCBnZW9tZXRyeSAgICAgICByZW1vdmUgcGl4ZWxzIGZyb20gdGhlIGltYWdlIGludGVyaW9y \
CiAgLWNsYW1wICAgICAgICAgICAgICAga2VlcCBwaXhlbCB2YWx1ZXMgaW4gcmFuZ2UgKDAtUXVh \
bnR1bVJhbmdlKQogIC1jbGlwICAgICAgICAgICAgICAgIGNsaXAgYWxvbmcgdGhlIGZpcnN0IHBh \
dGggZnJvbSB0aGUgOEJJTSBwcm9maWxlCiAgLWNsaXAtcGF0aCBpZCAgICAgICAgY2xpcCBhbG9u \
ZyBhIG5hbWVkIHBhdGggZnJvbSB0aGUgOEJJTSBwcm9maWxlCiAgLWNvbG9yaXplIHZhbHVlICAg \
ICAgY29sb3JpemUgdGhlIGltYWdlIHdpdGggdGhlIGZpbGwgY29sb3IKICAtY29sb3ItbWF0cml4 \
IG1hdHJpeCBhcHBseSBjb2xvciBjb3JyZWN0aW9uIHRvIHRoZSBpbWFnZQogIC1jb25uZWN0ZWQt \
Y29tcG9uZW50cyBjb25uZWN0aXZpdHkKICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0ZWQt \
Y29tcG9uZW50cyB1bmlxdWVseSBsYWJlbGVkCiAgLWNvbnRyYXN0ICAgICAgICAgICAgZW5oYW5j \
ZSBvciByZWR1Y2UgdGhlIGltYWdlIGNvbnRyYXN0CiAgLWNvbnRyYXN0LXN0cmV0Y2ggZ2VvbWV0 \
cnkKICAgICAgICAgICAgICAgICAgICAgICBpbXByb3ZlIGNvbnRyYXN0IGJ5IGBzdHJldGNoaW5n \
JyB0aGUgaW50ZW5zaXR5IHJhbmdlCiAgLWNvbnZvbHZlIGNvZWZmaWNpZW50cwogICAgICAgICAg \
ICAgICAgICAgICAgIGFwcGx5IGEgY29udm9sdXRpb24ga2VybmVsIHRvIHRoZSBpbWFnZQogIC1j \
eWNsZSBhbW91bnQgICAgICAgIGN5Y2xlIHRoZSBpbWFnZSBjb2xvcm1hcAogIC1kZWNpcGhlciBm \
aWxlbmFtZSAgIGNvbnZlcnQgY2lwaGVyIHBpeGVscyB0byBwbGFpbiBwaXhlbHMKICAtZGVza2V3 \
IHRocmVzaG9sZCAgICBzdHJhaWdodGVuIGFuIGltYWdlCiAgLWRlc3BlY2tsZSAgICAgICAgICAg \
cmVkdWNlIHRoZSBzcGVja2xlcyB3aXRoaW4gYW4gaW1hZ2UKICAtZGlzdG9ydCBtZXRob2QgYXJn \
cwogICAgICAgICAgICAgICAgICAgICAgIGRpc3RvcnQgaW1hZ2VzIGFjY29yZGluZyB0byBnaXZl \
biBtZXRob2QgYWQgYXJncwogIC1kcmF3IHN0cmluZyAgICAgICAgIGFubm90YXRlIHRoZSBpbWFn \
ZSB3aXRoIGEgZ3JhcGhpYyBwcmltaXRpdmUKICAtZWRnZSByYWRpdXMgICAgICAgICBhcHBseSBh \
IGZpbHRlciB0byBkZXRlY3QgZWRnZXMgaW4gdGhlIGltYWdlCiAgLWVuY2lwaGVyIGZpbGVuYW1l \
ICAgY29udmVydCBwbGFpbiBwaXhlbHMgdG8gY2lwaGVyIHBpeGVscwogIC1lbWJvc3MgcmFkaXVz \
ICAgICAgIGVtYm9zcyBhbiBpbWFnZQogIC1lbmhhbmNlICAgICAgICAgICAgIGFwcGx5IGEgZGln \
aXRhbCBmaWx0ZXIgdG8gZW5oYW5jZSBhIG5vaXN5IGltYWdlCiAgLWVxdWFsaXplICAgICAgICAg \
ICAgcGVyZm9ybSBoaXN0b2dyYW0gZXF1YWxpemF0aW9uIHRvIGFuIGltYWdlCiAgLWV2YWx1YXRl \
IG9wZXJhdG9yIHZhbHVlCiAgICAgICAgICAgICAgICAgICAgICAgZXZhbHVhdGUgYW4gYXJpdGht \
ZXRpYywgcmVsYXRpb25hbCwgb3IgbG9naWNhbCBleHByZXNzaW9uCiAgLWV4dGVudCBnZW9tZXRy \
eSAgICAgc2V0IHRoZSBpbWFnZSBzaXplCiAgLWV4dHJhY3QgZ2VvbWV0cnkgICAgZXh0cmFjdCBh \
cmVhIGZyb20gaW1hZ2UKICAtZmVhdHVyZXMgZGlzdGFuY2UgICBhbmFseXplIGltYWdlIGZlYXR1 \
cmVzIChlLmcuIGNvbnRyYXN0LCBjb3JyZWxhdGlvbikKICAtZmZ0ICAgICAgICAgICAgICAgICBp \
bXBsZW1lbnRzIHRoZSBkaXNjcmV0ZSBGb3VyaWVyIHRyYW5zZm9ybSAoREZUKQogIC1mbGlwICAg \
ICAgICAgICAgICAgIGZsaXAgaW1hZ2UgdmVydGljYWxseQogIC1mbG9vZGZpbGwgZ2VvbWV0cnkg \
Y29sb3IKICAgICAgICAgICAgICAgICAgICAgICBmbG9vZGZpbGwgdGhlIGltYWdlIHdpdGggY29s \
b3IKICAtZmxvcCAgICAgICAgICAgICAgICBmbG9wIGltYWdlIGhvcml6b250YWxseQogIC1mcmFt \
ZSBnZW9tZXRyeSAgICAgIHN1cnJvdW5kIGltYWdlIHdpdGggYW4gb3JuYW1lbnRhbCBib3JkZXIK \
ICAtZnVuY3Rpb24gbmFtZSBwYXJhbWV0ZXJzCiAgICAgICAgICAgICAgICAgICAgICAgYXBwbHkg \
ZnVuY3Rpb24gb3ZlciBpbWFnZSB2YWx1ZXMKICAtZ2FtbWEgdmFsdWUgICAgICAgICBsZXZlbCBv \
ZiBnYW1tYSBjb3JyZWN0aW9uCiAgLWdhdXNzaWFuLWJsdXIgZ2VvbWV0cnkKICAgICAgICAgICAg \
ICAgICAgICAgICByZWR1Y2UgaW1hZ2Ugbm9pc2UgYW5kIHJlZHVjZSBkZXRhaWwgbGV2ZWxzCiAg \
LWdlb21ldHJ5IGdlb21ldHJ5ICAgcHJlZmVycmVkIHNpemUgb3IgbG9jYXRpb24gb2YgdGhlIGlt \
YWdlCiAgLWdyYXlzY2FsZSBtZXRob2QgICAgY29udmVydCBpbWFnZSB0byBncmF5c2NhbGUKICAt \
aG91Z2gtbGluZXMgZ2VvbWV0cnkKICAgICAgICAgICAgICAgICAgICAgICBpZGVudGlmeSBsaW5l \
cyBpbiB0aGUgaW1hZ2UKICAtaWRlbnRpZnkgICAgICAgICAgICBpZGVudGlmeSB0aGUgZm9ybWF0 \
IGFuZCBjaGFyYWN0ZXJpc3RpY3Mgb2YgdGhlIGltYWdlCiAgLWlmdCAgICAgICAgICAgICAgICAg \
aW1wbGVtZW50cyB0aGUgaW52ZXJzZSBkaXNjcmV0ZSBGb3VyaWVyIHRyYW5zZm9ybSAoREZUKQog \
IC1pbXBsb2RlIGFtb3VudCAgICAgIGltcGxvZGUgaW1hZ2UgcGl4ZWxzIGFib3V0IHRoZSBjZW50 \
ZXIKICAtaW50ZXJwb2xhdGl2ZS1yZXNpemUgZ2VvbWV0cnkKICAgICAgICAgICAgICAgICAgICAg \
ICByZXNpemUgaW1hZ2UgdXNpbmcgJ3BvaW50IHNhbXBsZWQnIGludGVycG9sYXRpb24KICAta3V3 \
YWhhcmEgZ2VvbWV0cnkgICBlZGdlIHByZXNlcnZpbmcgbm9pc2UgcmVkdWN0aW9uIGZpbHRlcgog \
IC1sYXQgZ2VvbWV0cnkgICAgICAgIGxvY2FsIGFkYXB0aXZlIHRocmVzaG9sZGluZwogIC1sZXZl \
bCB2YWx1ZSAgICAgICAgIGFkanVzdCB0aGUgbGV2ZWwgb2YgaW1hZ2UgY29udHJhc3QKICAtbGV2 \
ZWwtY29sb3JzIGNvbG9yLGNvbG9yCiAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwgaW1hZ2Ug \
d2l0aCB0aGUgZ2l2ZW4gY29sb3JzCiAgLWxpbmVhci1zdHJldGNoIGdlb21ldHJ5CiAgICAgICAg \
ICAgICAgICAgICAgICAgaW1wcm92ZSBjb250cmFzdCBieSBgc3RyZXRjaGluZyB3aXRoIHNhdHVy \
YXRpb24nCiAgLWxpcXVpZC1yZXNjYWxlIGdlb21ldHJ5CiAgICAgICAgICAgICAgICAgICAgICAg \
cmVzY2FsZSBpbWFnZSB3aXRoIHNlYW0tY2FydmluZwogIC1sb2NhbC1jb250cmFzdCBnZW9tZXRy \
eQogICAgICAgICAgICAgICAgICAgICAgIGVuaGFuY2UgbG9jYWwgY29udHJhc3QKICAtbWFnbmlm \
eSAgICAgICAgICAgICBkb3VibGUgdGhlIHNpemUgb2YgdGhlIGltYWdlIHdpdGggcGl4ZWwgYXJ0 \
IHNjYWxpbmcKICAtbWVhbi1zaGlmdCBnZW9tZXRyeSBkZWxpbmVhdGUgYXJiaXRyYXJpbHkgc2hh \
cGVkIGNsdXN0ZXJzIGluIHRoZSBpbWFnZQogIC1tZWRpYW4gZ2VvbWV0cnkgICAgIGFwcGx5IGEg \
bWVkaWFuIGZpbHRlciB0byB0aGUgaW1hZ2UKICAtbW9kZSBnZW9tZXRyeSAgICAgICBtYWtlIGVh \
Y2ggcGl4ZWwgdGhlICdwcmVkb21pbmFudCBjb2xvcicgb2YgdGhlCiAgICAgICAgICAgICAgICAg \
ICAgICAgbmVpZ2hib3Job29kCiAgLW1vZHVsYXRlIHZhbHVlICAgICAgdmFyeSB0aGUgYnJpZ2h0 \
bmVzcywgc2F0dXJhdGlvbiwgYW5kIGh1ZQogIC1tb25vY2hyb21lICAgICAgICAgIHRyYW5zZm9y \
bSBpbWFnZSB0byBibGFjayBhbmQgd2hpdGUKICAtbW9ycGhvbG9neSBtZXRob2Qga2VybmVsCiAg \
ICAgICAgICAgICAgICAgICAgICAgYXBwbHkgYSBtb3JwaG9sb2d5IG1ldGhvZCB0byB0aGUgaW1h \
Z2UKICAtbW90aW9uLWJsdXIgZ2VvbWV0cnkKICAgICAgICAgICAgICAgICAgICAgICBzaW11bGF0 \
ZSBtb3Rpb24gYmx1cgogIC1uZWdhdGUgICAgICAgICAgICAgIHJlcGxhY2UgZXZlcnkgcGl4ZWwg \
d2l0aCBpdHMgY29tcGxlbWVudGFyeSBjb2xvciAKICAtbm9pc2UgZ2VvbWV0cnkgICAgICBhZGQg \
b3IgcmVkdWNlIG5vaXNlIGluIGFuIGltYWdlCiAgLW5vcm1hbGl6ZSAgICAgICAgICAgdHJhbnNm \
b3JtIGltYWdlIHRvIHNwYW4gdGhlIGZ1bGwgcmFuZ2Ugb2YgY29sb3JzCiAgLW9wYXF1ZSBjb2xv \
ciAgICAgICAgY2hhbmdlIHRoaXMgY29sb3IgdG8gdGhlIGZpbGwgY29sb3IKICAtb3JkZXJlZC1k \
aXRoZXIgTnhOCiAgICAgICAgICAgICAgICAgICAgICAgYWRkIGEgbm9pc2UgcGF0dGVybiB0byB0 \
aGUgaW1hZ2Ugd2l0aCBzcGVjaWZpYwogICAgICAgICAgICAgICAgICAgICAgIGFtcGxpdHVkZXMK \
ICAtcGFpbnQgcmFkaXVzICAgICAgICBzaW11bGF0ZSBhbiBvaWwgcGFpbnRpbmcKICAtcGVyY2Vw \
dGlibGUgZXBzaWxvbgogICAgICAgICAgICAgICAgICAgICAgIHBpeGVsIHZhbHVlIGxlc3MgdGhh \
biB8ZXBzaWxvbnwgYmVjb21lIGVwc2lsb24gb3IKICAgICAgICAgICAgICAgICAgICAgICAtZXBz \
aWxvbgogIC1wb2xhcm9pZCBhbmdsZSAgICAgIHNpbXVsYXRlIGEgUG9sYXJvaWQgcGljdHVyZQog \
IC1wb3N0ZXJpemUgbGV2ZWxzICAgIHJlZHVjZSB0aGUgaW1hZ2UgdG8gYSBsaW1pdGVkIG51bWJl \
ciBvZiBjb2xvciBsZXZlbHMKICAtcHJvZmlsZSBmaWxlbmFtZSAgICBhZGQsIGRlbGV0ZSwgb3Ig \
YXBwbHkgYW4gaW1hZ2UgcHJvZmlsZQogIC1xdWFudGl6ZSBjb2xvcnNwYWNlIHJlZHVjZSBjb2xv \
cnMgaW4gdGhpcyBjb2xvcnNwYWNlCiAgLXJhZGlhbC1ibHVyIGFuZ2xlICAgcmFkaWFsIGJsdXIg \
dGhlIGltYWdlIChkZXByZWNhdGVkIHVzZSAtcm90YXRpb25hbC1ibHVyCiAgLXJhaXNlIHZhbHVl \
ICAgICAgICAgbGlnaHRlbi9kYXJrZW4gaW1hZ2UgZWRnZXMgdG8gY3JlYXRlIGEgMy1EIGVmZmVj \
dAogIC1yYW5kb20tdGhyZXNob2xkIGxvdyxoaWdoCiAgICAgICAgICAgICAgICAgICAgICAgcmFu \
ZG9tIHRocmVzaG9sZCB0aGUgaW1hZ2UKICAtcmVnaW9uIGdlb21ldHJ5ICAgICBhcHBseSBvcHRp \
b25zIHRvIGEgcG9ydGlvbiBvZiB0aGUgaW1hZ2UKICAtcmVuZGVyICAgICAgICAgICAgICByZW5k \
ZXIgdmVjdG9yIGdyYXBoaWNzCiAgLXJlcGFnZSBnZW9tZXRyeSAgICAgc2l6ZSBhbmQgbG9jYXRp \
b24gb2YgYW4gaW1hZ2UgY2FudmFzCiAgLXJlc2FtcGxlIGdlb21ldHJ5ICAgY2hhbmdlIHRoZSBy \
ZXNvbHV0aW9uIG9mIGFuIGltYWdlCiAgLXJlc2l6ZSBnZW9tZXRyeSAgICAgcmVzaXplIHRoZSBp \
bWFnZQogIC1yb2xsIGdlb21ldHJ5ICAgICAgIHJvbGwgYW4gaW1hZ2UgdmVydGljYWxseSBvciBo \
b3Jpem9udGFsbHkKICAtcm90YXRlIGRlZ3JlZXMgICAgICBhcHBseSBQYWV0aCByb3RhdGlvbiB0 \
byB0aGUgaW1hZ2UKICAtcm90YXRpb25hbC1ibHVyIGFuZ2xlCiAgICAgICAgICAgICAgICAgICAg \
ICAgcm90YXRpb25hbCBibHVyIHRoZSBpbWFnZQogIC1zYW1wbGUgZ2VvbWV0cnkgICAgIHNjYWxl \
IGltYWdlIHdpdGggcGl4ZWwgc2FtcGxpbmcKICAtc2NhbGUgZ2VvbWV0cnkgICAgICBzY2FsZSB0 \
aGUgaW1hZ2UKICAtc2VnbWVudCB2YWx1ZXMgICAgICBzZWdtZW50IGFuIGltYWdlCiAgLXNlbGVj \
dGl2ZS1ibHVyIGdlb21ldHJ5CiAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aXZlbHkgYmx1 \
ciBwaXhlbHMgd2l0aGluIGEgY29udHJhc3QgdGhyZXNob2xkCiAgLXNlcGlhLXRvbmUgdGhyZXNo \
b2xkCiAgICAgICAgICAgICAgICAgICAgICAgc2ltdWxhdGUgYSBzZXBpYS10b25lZCBwaG90bwog \
IC1zZXQgcHJvcGVydHkgdmFsdWUgIHNldCBhbiBpbWFnZSBwcm9wZXJ0eQogIC1zaGFkZSBkZWdy \
ZWVzICAgICAgIHNoYWRlIHRoZSBpbWFnZSB1c2luZyBhIGRpc3RhbnQgbGlnaHQgc291cmNlCiAg \
LXNoYWRvdyBnZW9tZXRyeSAgICAgc2ltdWxhdGUgYW4gaW1hZ2Ugc2hhZG93CiAgLXNoYXJwZW4g \
Z2VvbWV0cnkgICAgc2hhcnBlbiB0aGUgaW1hZ2UKICAtc2hhdmUgZ2VvbWV0cnkgICAgICBzaGF2 \
ZSBwaXhlbHMgZnJvbSB0aGUgaW1hZ2UgZWRnZXMKICAtc2hlYXIgZ2VvbWV0cnkgICAgICBzbGlk \
ZSBvbmUgZWRnZSBvZiB0aGUgaW1hZ2UgYWxvbmcgdGhlIFggb3IgWSBheGlzCiAgLXNpZ21vaWRh \
bC1jb250cmFzdCBnZW9tZXRyeQogICAgICAgICAgICAgICAgICAgICAgIGluY3JlYXNlIHRoZSBj \
b250cmFzdCB3aXRob3V0IHNhdHVyYXRpbmcgaGlnaGxpZ2h0cyBvcgogICAgICAgICAgICAgICAg \
ICAgICAgIHNoYWRvd3MKICAtc2tldGNoIGdlb21ldHJ5ICAgICBzaW11bGF0ZSBhIHBlbmNpbCBz \
a2V0Y2gKICAtc29sYXJpemUgdGhyZXNob2xkICBuZWdhdGUgYWxsIHBpeGVscyBhYm92ZSB0aGUg \
dGhyZXNob2xkIGxldmVsCiAgLXNwYXJzZS1jb2xvciBtZXRob2QgYXJncwogICAgICAgICAgICAg \
ICAgICAgICAgIGZpbGwgaW4gYSBpbWFnZSBiYXNlZCBvbiBhIGZldyBjb2xvciBwb2ludHMKICAt \
c3BsaWNlIGdlb21ldHJ5ICAgICBzcGxpY2UgdGhlIGJhY2tncm91bmQgY29sb3IgaW50byB0aGUg \
aW1hZ2UKICAtc3ByZWFkIHJhZGl1cyAgICAgICBkaXNwbGFjZSBpbWFnZSBwaXhlbHMgYnkgYSBy \
YW5kb20gYW1vdW50CiAgLXN0YXRpc3RpYyB0eXBlIGdlb21ldHJ5CiAgICAgICAgICAgICAgICAg \
ICAgICAgcmVwbGFjZSBlYWNoIHBpeGVsIHdpdGggY29ycmVzcG9uZGluZyBzdGF0aXN0aWMgZnJv \
bSB0aGUKICAgICAgICAgICAgICAgICAgICAgICBuZWlnaGJvcmhvb2QKICAtc3RyaXAgICAgICAg \
ICAgICAgICBzdHJpcCBpbWFnZSBvZiBhbGwgcHJvZmlsZXMgYW5kIGNvbW1lbnRzCiAgLXN3aXJs \
IGRlZ3JlZXMgICAgICAgc3dpcmwgaW1hZ2UgcGl4ZWxzIGFib3V0IHRoZSBjZW50ZXIKICAtdGhy \
ZXNob2xkIHZhbHVlICAgICB0aHJlc2hvbGQgdGhlIGltYWdlCiAgLXRodW1ibmFpbCBnZW9tZXRy \
eSAgY3JlYXRlIGEgdGh1bWJuYWlsIG9mIHRoZSBpbWFnZQogIC10aWxlIGZpbGVuYW1lICAgICAg \
IHRpbGUgaW1hZ2Ugd2hlbiBmaWxsaW5nIGEgZ3JhcGhpYyBwcmltaXRpdmUKICAtdGludCB2YWx1 \
ZSAgICAgICAgICB0aW50IHRoZSBpbWFnZSB3aXRoIHRoZSBmaWxsIGNvbG9yCiAgLXRyYW5zZm9y \
bSAgICAgICAgICAgYWZmaW5lIHRyYW5zZm9ybSBpbWFnZQogIC10cmFuc3BhcmVudCBjb2xvciAg \
IG1ha2UgdGhpcyBjb2xvciB0cmFuc3BhcmVudCB3aXRoaW4gdGhlIGltYWdlCiAgLXRyYW5zcG9z \
ZSAgICAgICAgICAgZmxpcCBpbWFnZSB2ZXJ0aWNhbGx5IGFuZCByb3RhdGUgOTAgZGVncmVlcwog \
IC10cmFuc3ZlcnNlICAgICAgICAgIGZsb3AgaW1hZ2UgaG9yaXpvbnRhbGx5IGFuZCByb3RhdGUg \
MjcwIGRlZ3JlZXMKICAtdHJpbSAgICAgICAgICAgICAgICB0cmltIGltYWdlIGVkZ2VzCiAgLXR5 \
cGUgdHlwZSAgICAgICAgICAgaW1hZ2UgdHlwZQogIC11bmlxdWUtY29sb3JzICAgICAgIGRpc2Nh \
cmQgYWxsIGJ1dCBvbmUgb2YgYW55IHBpeGVsIGNvbG9yCiAgLXVuc2hhcnAgZ2VvbWV0cnkgICAg \
c2hhcnBlbiB0aGUgaW1hZ2UKICAtdmlnbmV0dGUgZ2VvbWV0cnkgICBzb2Z0ZW4gdGhlIGVkZ2Vz \
IG9mIHRoZSBpbWFnZSBpbiB2aWduZXR0ZSBzdHlsZQogIC13YXZlIGdlb21ldHJ5ICAgICAgIGFs \
dGVyIGFuIGltYWdlIGFsb25nIGEgc2luZSB3YXZlCiAgLXdhdmVsZXQtZGVub2lzZSB0aHJlc2hv \
bGQKICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVzIG5vaXNlIGZyb20gdGhlIGltYWdlIHVz \
aW5nIGEgd2F2ZWxldCB0cmFuc2Zvcm0KICAtd2hpdGUtdGhyZXNob2xkIHZhbHVlCiAgICAgICAg \
ICAgICAgICAgICAgICAgZm9yY2UgYWxsIHBpeGVscyBhYm92ZSB0aGUgdGhyZXNob2xkIGludG8g \
d2hpdGUKCkltYWdlIFNlcXVlbmNlIE9wZXJhdG9yczoKICAtYXBwZW5kICAgICAgICAgICAgICBh \
cHBlbmQgYW4gaW1hZ2Ugc2VxdWVuY2UKICAtY2x1dCAgICAgICAgICAgICAgICBhcHBseSBhIGNv \
bG9yIGxvb2t1cCB0YWJsZSB0byB0aGUgaW1hZ2UKICAtY29hbGVzY2UgICAgICAgICAgICBtZXJn \
ZSBhIHNlcXVlbmNlIG9mIGltYWdlcwogIC1jb21iaW5lICAgICAgICAgICAgIGNvbWJpbmUgYSBz \
ZXF1ZW5jZSBvZiBpbWFnZXMKICAtY29tcGFyZSAgICAgICAgICAgICBtYXRoZW1hdGljYWxseSBh \
bmQgdmlzdWFsbHkgYW5ub3RhdGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhbiBpbWFnZSBhbmQg \
aXRzIHJlY29uc3RydWN0aW9uCiAgLWNvbXBsZXggb3BlcmF0b3IgICAgcGVyZm9ybSBjb21wbGV4 \
IG1hdGhlbWF0aWNzIG9uIGFuIGltYWdlIHNlcXVlbmNlCiAgLWNvbXBvc2l0ZSAgICAgICAgICAg \
Y29tcG9zaXRlIGltYWdlCiAgLWNvcHkgZ2VvbWV0cnkgb2Zmc2V0CiAgICAgICAgICAgICAgICAg \
ICAgICAgY29weSBwaXhlbHMgZnJvbSBvbmUgYXJlYSBvZiBhbiBpbWFnZSB0byBhbm90aGVyCiAg \
LWNyb3AgZ2VvbWV0cnkgICAgICAgY3V0IG91dCBhIHJlY3Rhbmd1bGFyIHJlZ2lvbiBvZiB0aGUg \
aW1hZ2UKICAtZGVjb25zdHJ1Y3QgICAgICAgICBicmVhayBkb3duIGFuIGltYWdlIHNlcXVlbmNl \
IGludG8gY29uc3RpdHVlbnQgcGFydHMKICAtZXZhbHVhdGUtc2VxdWVuY2Ugb3BlcmF0b3IKICAg \
ICAgICAgICAgICAgICAgICAgICBldmFsdWF0ZSBhbiBhcml0aG1ldGljLCByZWxhdGlvbmFsLCBv \
ciBsb2dpY2FsIGV4cHJlc3Npb24KICAtZmxhdHRlbiAgICAgICAgICAgICBmbGF0dGVuIGEgc2Vx \
dWVuY2Ugb2YgaW1hZ2VzCiAgLWZ4IGV4cHJlc3Npb24gICAgICAgYXBwbHkgbWF0aGVtYXRpY2Fs \
IGV4cHJlc3Npb24gdG8gYW4gaW1hZ2UgY2hhbm5lbChzKQogIC1oYWxkLWNsdXQgICAgICAgICAg \
IGFwcGx5IGEgSGFsZCBjb2xvciBsb29rdXAgdGFibGUgdG8gdGhlIGltYWdlCiAgLWxheWVycyBt \
ZXRob2QgICAgICAgb3B0aW1pemUsIG1lcmdlLCBvciBjb21wYXJlIGltYWdlIGxheWVycwogIC1t \
b3JwaCB2YWx1ZSAgICAgICAgIG1vcnBoIGFuIGltYWdlIHNlcXVlbmNlCiAgLW1vc2FpYyAgICAg \
ICAgICAgICAgY3JlYXRlIGEgbW9zYWljIGZyb20gYW4gaW1hZ2Ugc2VxdWVuY2UKICAtcG9seSB0 \
ZXJtcyAgICAgICAgICBidWlsZCBhIHBvbHlub21pYWwgZnJvbSB0aGUgaW1hZ2Ugc2VxdWVuY2Ug \
YW5kIHRoZSBjb3JyZXNwb25kaW5nCiAgICAgICAgICAgICAgICAgICAgICAgdGVybXMgKGNvZWZm \
aWNpZW50cyBhbmQgZGVncmVlIHBhaXJzKS4KICAtcHJpbnQgc3RyaW5nICAgICAgICBpbnRlcnBy \
ZXQgc3RyaW5nIGFuZCBwcmludCB0byBjb25zb2xlCiAgLXByb2Nlc3MgYXJndW1lbnRzICAgcHJv \
Y2VzcyB0aGUgaW1hZ2Ugd2l0aCBhIGN1c3RvbSBpbWFnZSBmaWx0ZXIKICAtc2VwYXJhdGUgICAg \
ICAgICAgICBzZXBhcmF0ZSBhbiBpbWFnZSBjaGFubmVsIGludG8gYSBncmF5c2NhbGUgaW1hZ2UK \
ICAtc211c2ggZ2VvbWV0cnkgICAgICBzbXVzaCBhbiBpbWFnZSBzZXF1ZW5jZSB0b2dldGhlcgog \
IC13cml0ZSBmaWxlbmFtZSAgICAgIHdyaXRlIGltYWdlcyB0byB0aGlzIGZpbGUKCkltYWdlIFN0 \
YWNrIE9wZXJhdG9yczoKICAtY2xvbmUgaW5kZXhlcyAgICAgICBjbG9uZSBhbiBpbWFnZQogIC1k \
ZWxldGUgaW5kZXhlcyAgICAgIGRlbGV0ZSB0aGUgaW1hZ2UgZnJvbSB0aGUgaW1hZ2Ugc2VxdWVu \
Y2UKICAtZHVwbGljYXRlIGNvdW50LGluZGV4ZXMKICAgICAgICAgICAgICAgICAgICAgICBkdXBs \
aWNhdGUgYW4gaW1hZ2Ugb25lIG9yIG1vcmUgdGltZXMKICAtaW5zZXJ0IGluZGV4ICAgICAgICBp \
bnNlcnQgbGFzdCBpbWFnZSBpbnRvIHRoZSBpbWFnZSBzZXF1ZW5jZQogIC1yZXZlcnNlICAgICAg \
ICAgICAgIHJldmVyc2UgaW1hZ2Ugc2VxdWVuY2UKICAtc3dhcCBpbmRleGVzICAgICAgICBzd2Fw \
IHR3byBpbWFnZXMgaW4gdGhlIGltYWdlIHNlcXVlbmNlCgpNaXNjZWxsYW5lb3VzIE9wdGlvbnM6 \
CiAgLWRlYnVnIGV2ZW50cyAgICAgICAgZGlzcGxheSBjb3Bpb3VzIGRlYnVnZ2luZyBpbmZvcm1h \
dGlvbgogIC1kaXN0cmlidXRlLWNhY2hlIHBvcnQKICAgICAgICAgICAgICAgICAgICAgICBkaXN0 \
cmlidXRlZCBwaXhlbCBjYWNoZSBzcGFubmluZyBvbmUgb3IgbW9yZSBzZXJ2ZXJzCiAgLWhlbHAg \
ICAgICAgICAgICAgICAgcHJpbnQgcHJvZ3JhbSBvcHRpb25zCiAgLWxpc3QgdHlwZSAgICAgICAg \
ICAgcHJpbnQgYSBsaXN0IG9mIHN1cHBvcnRlZCBvcHRpb24gYXJndW1lbnRzCiAgLWxvZyBmb3Jt \
YXQgICAgICAgICAgZm9ybWF0IG9mIGRlYnVnZ2luZyBpbmZvcm1hdGlvbgogIC12ZXJzaW9uICAg \
ICAgICAgICAgIHByaW50IHZlcnNpb24gaW5mb3JtYXRpb24KCkJ5IGRlZmF1bHQsIHRoZSBpbWFn \
ZSBmb3JtYXQgb2YgYGZpbGUnIGlzIGRldGVybWluZWQgYnkgaXRzIG1hZ2ljCm51bWJlci4gIFRv \
IHNwZWNpZnkgYSBwYXJ0aWN1bGFyIGltYWdlIGZvcm1hdCwgcHJlY2VkZSB0aGUgZmlsZW5hbWUK \
d2l0aCBhbiBpbWFnZSBmb3JtYXQgbmFtZSBhbmQgYSBjb2xvbiAoaS5lLiBwczppbWFnZSkgb3Ig \
c3BlY2lmeSB0aGUKaW1hZ2UgdHlwZSBhcyB0aGUgZmlsZW5hbWUgc3VmZml4IChpLmUuIGltYWdl \
LnBzKS4gIFNwZWNpZnkgJ2ZpbGUnIGFzCictJyBmb3Igc3RhbmRhcmQgaW5wdXQgb3Igb3V0cHV0 \
Lgo=");

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
