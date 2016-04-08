(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .directive('questionControls', ['Config',function(Config) {
            return {
                restrict: 'E',
                templateUrl: Config.getDocumentRoot()+'views/question-controls.html'
            };
        }]);

})();