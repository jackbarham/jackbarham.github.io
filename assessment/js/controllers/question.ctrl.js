(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .controller('QuestionCtrl', ['$scope', '$stateParams', '$timeout', 'App',
            function ($scope, $stateParams, $timeout, App) {

                var sectionIndex = $scope.sectionIndex = $stateParams.section_index;
                var questionIndex = $scope.questionIndex = $stateParams.question_index;
                var question = $scope.question = App.Data.getAssessment().question_groups[sectionIndex-1].questions[questionIndex-1];

                $scope.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
                $scope.selected = null;

                $scope.prev = function() {
                    App.Navigation.prev();
                };

                $scope.next = function(index) {
                    if($scope.selected){
                        App.Data.setAnswer({
                            sectionIndex: sectionIndex,
                            questionIndex: questionIndex,
                            answerIndex: index
                        });
                        App.Navigation.next();
                    }
                };

                $scope.select = function(index) {

                    $scope.selected = index;

                    App.Display.setQuestionControls({
                        selected: true
                    });

                    var screenWidth = window.innerWidth;
                    if(screenWidth<580){
                        $timeout(function() {
                            $scope.next(index);
                        }, 500);
                    }
                };

                App.Display.showProgress(App.Navigation.progressAmount());
                App.Display.setQuestionControls({
                    prev: $scope.prev,
                    next: $scope.next,
                    selected: null
                });
                App.Display.showQuestionControls();

            } ]);

})();