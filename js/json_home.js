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

		httpGet("./js/shopia-section-five.json").then( function f6(result) {
  			var data = JSON.parse(result); 
          		document.getElementById("sed1").innerHTML=data["sed1"];
          		document.getElementById("sed2").innerHTML=data["sed2"];
         
  			return 'f6';
		});
	
});
