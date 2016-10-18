angular.module('app.controllers', [])

    .controller('questionsCtrl', function ($scope) {

    })

    .controller('profileCtrl', function ($scope) {

    })

    .controller('loginCtrl', function ($scope) {

    })

    .controller('signUpCtrl', function ($scope) {

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
