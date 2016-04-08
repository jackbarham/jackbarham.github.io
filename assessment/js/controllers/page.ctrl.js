(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .controller('PageCtrl', ['$scope','App',
            function ($scope, App) {

                // $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
                //     var animated = $element.find('ui-view');
                //     animated.removeClass('scrolled');
                //     animated.removeClass('modal');
                //     var forward = toState.name > fromState.name;
                //     if (forward) {
                //         $element.removeClass('backward');
                //         switch (toState.name) {
                //             case 'page.1':
                //             case 'page.2':
                //                 $scope.anim = 'scrolled';
                //                 break;
                //             case 'page.3':
                //                 $scope.anim = 'modal';
                //                 break;
                //         }
                //     } else {
                //         $element.addClass('backward');
                //         switch (toState.name) {
                //             case 'page.1':
                //                 $scope.anim = 'scrolled';
                //                 break;
                //             case 'page.2':
                //             case 'page.3':
                //                 $scope.anim = 'modal';
                //                 break;
                //         }
                //     }
                //     animated.addClass($scope.anim);
                //
                // });

            }]);

})();