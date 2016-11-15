angular.module('app.controllers', [])

    .controller('questionsCtrl', function ($scope) {

    })

    .controller('profileCtrl', function ($scope, $http) {
        debugger;
        $http.get("http://localhost:8080/LoveWishBknd/webresources/generic").then(function(resp){
            //alert("Success " + resp.data);
            var div = document.getElementById('Ciao');

            div.innerHTML = div.innerHTML + resp.data;
            //console.log('Success', resp); // JSON object
        }, function(err){
            alert("Err" + err)
            //console.error('ERR', err);
        })
    })

    .controller('loginCtrl', function ($scope) {

    })

    .controller('signUpCtrl', function ($scope) {
        debugger;
        $scope.idSubmit = function() {
        // using the "this" construct to pass in ng-model identified input data.
            debugger;
            _id = this.id_entry;
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
