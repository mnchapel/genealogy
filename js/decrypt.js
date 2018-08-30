async function decrypt(encrypted, password)
{
	console.log("in decrypt fun: " + encrypted);
	var options = {
		message: await openpgp.message.readArmored(encrypted), // parse encrypted bytes
		passwords: [password], 		// decrypt with password
		format: 'utf8'         		// output
	};

	openpgp.decrypt(options).then(function(plainText) {
		console.log("contenu du fichier : " + plainText.data);
	});
}
