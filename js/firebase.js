var myapp=angular.module('myapp', ['firebase'])

.controller("mainController", function($scope, $firebase) {
  
  // get # of real time users
  var listRef = new Firebase("https://seregaworld-776a8.firebaseio.com/presence/");
  var userRef = listRef.push();
  
  // Add ourselves to presence list when online.
  var presenceRef = new Firebase("https://seregaworld-776a8.firebaseio.com/.info/connected");
  presenceRef.on("value", function(snap) {
    if (snap.val()) {
      userRef.set(true);
      // Remove ourselves when we disconnect.
      userRef.onDisconnect().remove();
    }
  });
  
  listRef.on("value", function(snap) {
    $scope.online = snap.numChildren();
  });  
  
  var ref = new Firebase("https://seregaworld-776a8.firebaseio.com/days");  
  var fb = $firebase(ref);
  
  // sync as object 
  var syncObject = fb.$asObject();

  // three way data binding
  syncObject.$bindTo($scope, 'days');

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
	var data1;
	var data2;
	var data3;
	var data4;

	httpGet("./js/shopia-header.json").then( function f1(result) {
  			data1 = JSON.parse(result); 
			
  			return 'f1';
		});

	httpGet("./js/shopia-section-one.json").then( function f2(result) {
  			data2 = JSON.parse(result); 
		
  			return 'f2';
		});

	httpGet("./js/shopia-footer.json").then( function f7(result) {
  			data3 = JSON.parse(result); 
			
  			return 'f7';
		});

	httpGet("./js/preload_and_other.json").then( function f7(result) {
  			data4 = JSON.parse(result); 
			
  			return 'f7';
		});

	$scope.reset = function() {    
    		fb.$set({
			"data1":data1,
			"data2":data2,
			"data3":data3,
			"data4":data4
		});
	};
});
