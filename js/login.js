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
			console.log("test1");
			var encrypted = await readFile("data/treeData.asc");
			treeData = await decrypt(encrypted, password);
			console.log("test2");
			console.log(treeData);
			
			spouseDataString  = await readFile("https://raw.githubusercontent.com/mnchapel/genealogy/gh-pages/data/spouseData.json");
			famillyDataString = await readFile("https://raw.githubusercontent.com/mnchapel/genealogy/gh-pages/data/famillyData.json");


			console.log("test3");
			// TODO add test on the password
			document.getElementById("content").innerHTML = "";
			$("#content").load("mainWindow.html", function()
			{
				$.getScript("js/mainWindow.js");
			});
		}
			
	});

})();
