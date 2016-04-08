(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .controller('SectionCtrl', ['$scope', '$stateParams', 'App',
            function ($scope, $stateParams, App) {

                var sectionIndex = $scope.sectionIndex = $stateParams.section_index;
                $scope.sectionTitle = App.Data.getAssessment().question_groups[sectionIndex-1].label;
                
                if(App.Navigation.progressAmount() === 0) App.Display.hideProgress();
                App.Display.hideQuestionControls();

                $scope.prev = function() {
                    App.Navigation.prev();
                };

            } ]);

})();