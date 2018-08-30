function readFile(path)
{
	$.get(path, function(response)
	{
		console.log("read file: " + response);
		return response;
	});
}
