 var myapp = angular.module('myapp', ["ui.router", "firebase"]);
        myapp.controller("mainController", function ($scope, $firebase){
	//два флага они нам нужны для того чтобы проверить авторизировался пользователь или нет
            var flag_sref=false; //для авторизации
            var flag_sref_root=false;//для проверки на администратора
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

	           };
//синхронизируем текстовые данные с JSON со страницей и с firebase
            httpGet("./js/shopia-header.json").then(function (result) {
                    var data=JSON.parse(result);
                    var ref1 = new Firebase("https://seregaworld-776a8.firebaseio.com/shopia_header");
                    var fb1 = $firebase(ref1);
                    var syncObject = fb1.$asObject();
                    syncObject.$bindTo($scope, 'shopia_header');
                    fb1.$set({
                        "shopia_header":data
                    });
                    return 'f';
                });
            httpGet("./js/shopia-section-one.json").then( function (result) {
                    var data = JSON.parse(result); 
                    var ref = new Firebase("https://seregaworld-776a8.firebaseio.com/shopia_section_one");
                    var fb = $firebase(ref);
                    var syncObject = fb.$asObject();
                    syncObject.$bindTo($scope, 'shopia_section_one');
                    fb.$set({
                        "shopia_section_one": data
                      });
                    return 'f';
                });
                
            httpGet("js/shopia-footer.json").then( function (result) {
                    var data = JSON.parse(result); 
                    var ref = new Firebase("https://seregaworld-776a8.firebaseio.com/shopia_footer");
                    var fb = $firebase(ref);
                    var syncObject = fb.$asObject();
                    syncObject.$bindTo($scope, 'shopia_footer');
                    fb.$set({
                    "shopia_footer":data
                      });
                    return 'f';
                });

            httpGet("js/preload_and_other.json").then( function (result) {
                    var data = JSON.parse(result); 
                    var ref = new Firebase("https://seregaworld-776a8.firebaseio.com/preload_and_other");
                    var fb = $firebase(ref);
                    var syncObject = fb.$asObject();
                    syncObject.$bindTo($scope, 'preload_and_other');
                    fb.$set({
                    "preload_and_other":data
                      });
                    return 'f';
                });
            httpGet("./js/shopia-section-two.json").then( function (result) {
                   var data = JSON.parse(result); 
                   var ref = new Firebase("https://seregaworld-776a8.firebaseio.com/shopia_section_two");
                    var fb = $firebase(ref);
                    var syncObject = fb.$asObject();
                    syncObject.$bindTo($scope, 'shopia_section_two');
                    fb.$set({
                    "shopia_section_two":data
                      });
                    return 'f';
		      });

              httpGet("./js/shopia-section-three.json").then( function(result) {
                    var data = JSON.parse(result); 
                    var ref = new Firebase("https://seregaworld-776a8.firebaseio.com/shopia_section_three");
                    var fb = $firebase(ref);
                    var syncObject = fb.$asObject();
                    syncObject.$bindTo($scope, 'shopia_section_three');
                    fb.$set({
                    "shopia_section_three":data
                      });
                    return 'f';
                });

                httpGet("./js/shopia-section-four.json").then( function(result) {
                        var data = JSON.parse(result); 
                        var ref = new Firebase("https://seregaworld-776a8.firebaseio.com/shopia_section_four");
                        var fb = $firebase(ref);
                        var syncObject = fb.$asObject();
                        syncObject.$bindTo($scope, 'shopia_section_four');
                        fb.$set({
                        "shopia_section_four":data
                          });
                        return 'f';
                    });
                    httpGet("./js/shopia-section-five.json").then( function(result) {
                        var data = JSON.parse(result); 
                        var ref = new Firebase("https://seregaworld-776a8.firebaseio.com/shopia_section_five");
                        var fb = $firebase(ref);
                        var syncObject = fb.$asObject();
                        syncObject.$bindTo($scope, 'shopia_section_five');
                        fb.$set({
                        "shopia_section_five":data
                          });
                        return 'f';
                    });
                    httpGet("./js/categories.json").then( function (result) {
                        var data = JSON.parse(result); 
                        var ref = new Firebase("https://seregaworld-776a8.firebaseio.com/categories");
                        var fb = $firebase(ref);
                        var syncObject = fb.$asObject();
                        syncObject.$bindTo($scope, 'categories');
                        fb.$set({
                        "categories":data
                          });
			//для изменения админом заголовок categories.html
                        $scope.massege_text_categ=data.title_big;
                        $scope.updateFunction_three=function(name){
                            $scope.categories.categories.title_big=name;
                        }
                        return 'f';
		              });
                    httpGet("./js/lorem.json").then( function(result) {
                        var data = JSON.parse(result); 
                        var ref = new Firebase("https://seregaworld-776a8.firebaseio.com/lorem");
                        var fb = $firebase(ref);
                        var syncObject = fb.$asObject();
                        syncObject.$bindTo($scope, 'lorem');
                        fb.$set({
                            lorem:data
                          });
//для изменения админом заголовок lorem.html и текста
                        $scope.massege_title=data.title_big;
                        $scope.updateFunction=function(name){
                            $scope.lorem.lorem.title_big=name;
                        }
                        $scope.massege_text=data.text_lorem;
                        $scope.updateFunction_two=function(name){
                            $scope.lorem.lorem.text_lorem=name;
                        }
                        return 'f';
		              });
            	   //функция обработки данных пользователем
                    $scope.selectFunction = function(login_a,password_a) {
                        var ref1 = new Firebase("https://seregaworld-776a8.firebaseio.com/answer");
                        fb1 = $firebase(ref1);
                        syncObject = fb1.$asObject();
                        $scope.articles = fb1.$asArray();
                        
                        $scope.articles.$loaded(
                        ).then(function(array) {
                             var ref2 = new Firebase("https://seregaworld-776a8.firebaseio.com/help");
                            fb2 = $firebase(ref2);
                            syncObject = fb2.$asObject();
                            $scope.articleshelp = fb2.$asArray();  
			    $scope.articleshelp.$loaded().then(function(array1) {
                                    i=0;
			//ЕСЛИ пустое или не прошло валидацию
			if ((login_a!=undefined)&&(password_a!=undefined)){
					//проверяем этот пользователь зарегистрирован
                                    while (array1[i]!=undefined) {
                                        if  (array1[i].login==login_a)
                                         {   //если зарегистрирован то пароль надо вводить тот что при первой регистрации, иначе новый пользователь(регистрируем)
                                            if (array1[i].text!=password_a)
                                            {    alert("Введите правильный пароль");
                                            }
                                             else
                                             {
                                                 flag_sref=true;
                                                 if(array1[i].root==1)
                                                     flag_sref_root=true;
                                             };
                                             break;
                                         }
                                        i=i+1;
                                    }
                                    if(array1[i]==undefined)
                                    {
                                        $scope.articleshelp.$add({
                                                 login: login_a,
                                                 text: password_a   ,
                                                root: 0
                                        }); 
                                        flag_sref=true;
                                    } 
				}                                    
                            });
                                
                        });
                    };
		//функции получения флагов авторизации и/или администратора
                    $scope.flag_function = function() {
                            return flag_sref;
                        }
                    $scope.function_flag_root = function() {
                            return flag_sref_root;
                        }

            });
//переключение между страницами
        myapp.config(function($stateProvider, $urlRouterProvider){
        // For any unmatched url, send to /route1
            $urlRouterProvider.otherwise("/auth");
                $stateProvider.state('homes', {
                    url: "/homes",
                    templateUrl:"./html/home.html"
                    });
               
                $stateProvider
                .state('lorem', {
                    url: "/lorem",
                    templateUrl: "./html/lorem.html"
                })
                .state('categories', {
                    url: "/categories",
                    templateUrl: "./html/categories.html"
                })
                .state('auth', {
                    url: "/auth",
                    templateUrl: "./html/auth.html"
                })
                .state('root', {
                    url: "/root",
                    templateUrl: "./html/root.html"
                })
        })
