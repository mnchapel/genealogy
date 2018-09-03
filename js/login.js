(async function() {

	$('#login').on('click', async function()
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
			encrypted = await readFile("data/treeData.asc");
			await decrypt(encrypted, password);
			
			var spouseDataString = readFile("https://raw.githubusercontent.com/mnchapel/genealogy/gh-pages/data/spouseData.json");

			// TODO add test on the password
			document.getElementById("content").innerHTML = "";
			$("#content").load("mainWindow.html", function()
			{
				$.getScript("js/mainWindow.js");
			});
		}
			
	});

})();
