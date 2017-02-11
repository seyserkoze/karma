
	var andrew = document.getElementById("my-login");

	console.log("andrew logged");
	andrew.addEventListener("submit", function (e) {
		e.preventDefault();
   //checks whether the pressed key is "Enter"
    	 var actual_input = document.querySelector("input");
    	 console.log(actual_input);
    	 var text= actual_input.value;
    	 console.log(text);
    	 $.ajax({
    	 	
	  //The URL to process the request
	    'url' : 'https://apis.scottylabs.org/directory/v1/andrewID/'+text,
	  //The type of request, also known as the "method" in HTML forms
	  //Can be 'GET' or 'POST'
	    'type' : 'GET',
	  //Any post-data/get-data parameters

	  //The response from the server
	    'success' : function(data) {
	    
	      		 
				window.location.href = 'feed.html';
			
			
	      },
	      'error': function(data){
	      	console.log("failed");
	      }
	  });





  // 		var text= e.target.value;
  // 		document.write(text);
	 //    var xmlHttp = new XMLHttpRequest();
		// xmlHttp.open( "GET", "https://apis.scottylabs.org/directory/v1/andrewID/"+text, false );
		// xmlHttp.send(null);
		// returnVal= xmlHttp.responseText;
		// console.log(returnVal);

	});





	// document.write(returnVal);
	
