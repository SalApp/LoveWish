angular.module('app.controllers', [])

    .controller('questionsCtrl', function ($scope) {

    })

    .controller('profileCtrl', function ($scope, $http) {
        debugger;
        $http.get("http://192.168.1.67:8084/LoveWishBknd/webresources/generic").then(function(resp){

            //alert("Success " + resp.data);
            var div = document.getElementById('Ciao');

            div.innerHTML = div.innerHTML + resp.data;
            //console.log('Success', resp); // JSON object
        }, function(err){
            alert("Err " + err.data)
            //console.error('ERR', err);
        })
    })

    .controller('loginCtrl', function ($scope) {

    })

    .controller('signUpCtrl', function ($scope,$http) {
        $scope.idSubmit = function() {
        // using the "this" construct to pass in ng-model identified input data.
          debugger;
          var name = "name="+$scope.$$childHead.name;
          var lastname = "lastname="+$scope.$$childHead.lastname;
          var bithdate = "bithdate="+$scope.$$childHead.birthdate;
          var city = "city="+$scope.$$childHead.city;
          var email = "email="+$scope.$$childHead.email;
          var password = "password="+$scope.$$childHead.password;
          var parameters = name + "&" + lastname + "&" + bithdate + "&" + city + "&" + email + "&" + password;
          var url = "http://192.168.1.67:8084/LoveWishBknd/webresources/generic?"+parameters;
          http.get(url).then(function(resp){
              debugger;
                alert(resp);
        
            }, function(err){
                debugger;
                alert("Err" + err)
            })
            //alert($scope.$$childHead.lastname);
        }
    })

    .controller('settingsCtrl', function ($scope) {

    })

    .controller('loveWishCtrl', function ($scope) {

    })

    .controller('matchCtrl', function ($scope) {
        debugger;

        $scope.cuore = function (index) {
            //        alert("ciao");
            debugger;
            var clear = 0;
            for (var i = 0; i < index; i++) {
                document.getElementById((i + 1) + 'h').src = "img/Heart_icon_red_hollow_red.png";
                clear++;
            }
            for (var i = clear; i < 5; i++) {
                document.getElementById((i + 1) + 'h').src = "img/Heart_icon_red_hollow.png";
            }
        }

    })
