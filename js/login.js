(async function() {

	$('#login').on('click', async function()
	//document.getElementById("login").addEventListener("click", async function()
	{
		var output = document.getElementById("output");
		var password = document.getElementById("password").value;

		if(password == "")
		{
			output.innerHTML = "No password provided";
			output.style.color = "red";
		}
		else
		{
			encrypted = await readFile("data/tree.asc");		
			console.log("encrypted file: " + encrypted);
			await decrypt(encrypted, password);
			// TODO add test on the password
			document.getElementById("content").innerHTML = "";
			$("#content").load("mainWindow.html", function()
			{
				$.getScript("js/mainWindow.js");
			});
		}
			
	});

})();
