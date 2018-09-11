async function decrypt(encrypted, password)
{
	var text;
	var options =
	{
		message: await openpgp.message.readArmored(encrypted), // parse encrypted bytes
		passwords: [password], 		// decrypt with password
		format: 'utf8'         		// output
	};

	text = openpgp.decrypt(options).then(function(plainText)
	{
		return plainText.data;
	}).catch(function(error)
	{
		console.log("error");
	});
	
	return text;
}
