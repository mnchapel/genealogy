async function decrypt(encrypted, password)
{
	var options =
	{
		message: await openpgp.message.readArmored(encrypted), // parse encrypted bytes
		passwords: [password], 		// decrypt with password
		format: 'utf8'         		// output
	};

	await openpgp.decrypt(options).then(function(plainText)
	{
		return plainText.data;
	});
}
