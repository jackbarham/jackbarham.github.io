(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .controller('ConfirmationCtrl', ['$scope','App',
            function ($scope, App) {

                App.Display.hideProgress();
                App.Display.hideQuestionControls();

            } ]);

})();