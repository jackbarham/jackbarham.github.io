(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .directive('progressBar', ['Config',function(Config) {
            return {
                restrict: 'E',
                templateUrl: Config.getDocumentRoot()+'views/progress.html'
            };
        }]);

})();