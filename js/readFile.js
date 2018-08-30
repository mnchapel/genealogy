async function readFile(path)
{
	var encrypted;

	await $.get(path, function(response)
	{
		console.log("read file: " + response);
		encrypted = response;
	});

	return encrypted;
}
