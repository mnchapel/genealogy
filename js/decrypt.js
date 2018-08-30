async function decrypt(encrypted)
{
	console.log("in decrypt fun: " + encrypted);
	var options = {
		message: await openpgp.message.readArmored(encrypted), // parse encrypted bytes
		passwords: ['testpassword'],              		// decrypt with password
		format: 'utf8'                          		// output as Uint8Array
	};

	openpgp.decrypt(options).then(function(plainText) {
		console.log("contenu du fichier : " + plainText.data);
	});
}
