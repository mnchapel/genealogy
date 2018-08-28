var openpgp = require('openpgp');
opengpgp.initWorker({ path:'openpgp.worker.min.js' });

options = {
	message: await openpgp.message.read(encrypted),
	passwords: ['testpassword'],
	format: 'binary'
}

openpgp.decrypt(options).then(function(plainText) {
	console.log("contenu du fichier : " + plainText.data);
});
