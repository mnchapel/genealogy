function parseTree()
{
	treeSplited = tree.split('\n');

	for(var i=0; i<treeSplited.length; i++)
	{
		var line = treeSplited[i];
		var lineSplited = line.split(" ");

		// INDIVIDUAL
		if(lineSplited[0] == "0"
		&& lineSplited[2] == "INDI")
		{
			
		}

		// FAMILLY
		if(lineSplited[0] == "0"
		&& lineSplited[2] == "FAM")
		{
		}
		
	}
}
