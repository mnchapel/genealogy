async function readFile(path)
{
	var encrypted;

	await $.get(path, function(response)
	{
		encrypted = response;
	});

	return encrypted;
}
