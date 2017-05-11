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

		httpGet("./js/shopia-footer.json").then( function f7(result) {
  			var data = JSON.parse(result); 
			document.getElementById("shops").innerHTML=data["shops"];
          		document.getElementById("subscribe").innerHTML=data["subscribe"];
         		document.getElementById("shopia_fashion_store").innerHTML=data["shopia_fashion_store"];
  			return 'f7';
		});










});
