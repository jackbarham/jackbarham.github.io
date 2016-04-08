(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .controller('WelcomeCtrl', ['$scope','App',
            function ($scope, App) {

                $scope.student = App.User.getUser();

                if(App.Navigation.progressAmount() === 0) App.Display.hideProgress();
                App.Display.hideQuestionControls();

            } ]);

})();