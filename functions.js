
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", "https://apis.scottylabs.org/directory/v1/andrewID/chut", false );
	xmlHttp.send(null);
	returnVal= xmlHttp.responseText
	document.write(returnVal);
	
