(async function() {

	$('#login').on('click', async function()
	{
		var output = document.getElementById("output");
		password = document.getElementById("password").value;

		if(password == "")
		{
			output.innerHTML = "No password provided";
			output.style.color = "red";
		}
		else
		{
			var encrypted = await readFile("data/treeData.asc");
			treeData = await decrypt(encrypted, password);
			
			spouseDataString  = await readFile("https://raw.githubusercontent.com/mnchapel/genealogy/gh-pages/data/spouseData.json");
			famillyDataString = await readFile("https://raw.githubusercontent.com/mnchapel/genealogy/gh-pages/data/famillyData.json");

			// TODO add test on the password
			document.getElementById("content").innerHTML = "";
			$("#content").load("mainWindow.html", function()
			{
				$.getScript("js/mainWindow.js");
			});
		}
			
	});

})();
