(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .directive('toolbar', ['Config', 'User', function(Config, User) {
            return {
                restrict: 'E',
                templateUrl: Config.getDocumentRoot()+'views/toolbar.html',
                link: function(scope, element, attributes) {

                    scope.student = User.getUser();

                }
            };
        }]);

})();