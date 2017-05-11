$(document).ready(function(){
	function httpGet(url) {
		return new Promise(function(resolve, reject) {
			var xhr = new XMLHttpRequest();
    			xhr.open('GET', url, true);

    			xhr.onload = function() {
      				if (this.status == 200) {
        				resolve(xhr.responseText);
      				} else {
        				var error = new Error(this.statusText);
        				error.code = this.status;
        				reject(error);
      				}
    			};

    			xhr.onerror = function() {
      				reject(new Error("Network Error"));
    			};

    			xhr.send();
  		});

	}	
	httpGet("./js/categories.json").then( function f3(result) {
  			var data = JSON.parse(result); 
			document.getElementById("text_lorem").innerHTML=data["text_lorem"];
         		document.getElementById("title_small").innerHTML=data["title_small"];
          		document.getElementById("title_big").innerHTML=data["title_big"];
  			return 'f3';
		});

	
});
