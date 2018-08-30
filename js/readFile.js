async function readFile(path)
{
	await $.get(path, async function(response)
	{
		console.log("read file: " + response);
		return response;
	});
}
