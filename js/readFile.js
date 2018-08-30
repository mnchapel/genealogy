async function readFile(path)
{
	await $.get(path, function(response)
	{
		return response;
	});
}
