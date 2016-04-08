(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .factory('Navigation', ['$state', '$stateParams', 'Data', function($state, $stateParams, Data) {

            return {

                next: function(){

                    var sectionIndex = Number($stateParams.section_index);
                    var questionIndex = Number($stateParams.question_index);
                    var assessment = Data.getAssessment();
                    var currentGroupQuestions = assessment.question_groups[sectionIndex-1].questions;

                    // Is there another question in this section?
                    if(currentGroupQuestions.length>questionIndex){
                        $state.go('page.question',{
                            section_index: sectionIndex,
                            question_index: questionIndex + 1
                        });
                    }

                    // Is there another section
                    else if(assessment.question_groups.length>sectionIndex){
                        $state.go('page.section',{
                            section_index: sectionIndex + 1
                        });
                    }

                    // Send to confirmation screen
                    else {
                        $state.go('page.confirmation');
                    }

                },

                prev: function(){

                    var sectionIndex = Number($stateParams.section_index);
                    var questionIndex = Number($stateParams.question_index);
                    var assessment = Data.getAssessment();
                    var currentGroupQuestions = assessment.question_groups[sectionIndex-1].questions;

                    // Is this the first section title?
                    if(sectionIndex===1 && !questionIndex){
                        $state.go('page.welcome');
                    }

                    // Is this a later section title?
                    else if(!questionIndex){
                        $state.go('page.question',{
                            section_index: sectionIndex - 1,
                            question_index: assessment.question_groups[sectionIndex-2].questions.length
                        });
                    }

                    // Is there a previous question in this section?
                    else if(questionIndex>1){
                        $state.go('page.question',{
                            section_index: sectionIndex,
                            question_index: questionIndex - 1
                        });
                    }

                    // Send to section title
                    else {
                        $state.go('page.section',{
                            section_index: sectionIndex
                        });
                    }


                },

                progressAmount: function(){

                    var sectionIndex = Number($stateParams.section_index);
                    var questionIndex = Number($stateParams.question_index);
                    var assessment = Data.getAssessment();

                    var totalquestions = 0;
                    var currentquestion = 0;

                    angular.forEach(assessment.question_groups, function(group, groupkey){
                        angular.forEach(group.questions, function(question, questionkey){
                            totalquestions ++;
                            if(sectionIndex===groupkey+1 && questionIndex===questionkey+1){
                                currentquestion = totalquestions - 1;
                            }
                        });
                    });

                    var amount = (100/totalquestions)*currentquestion;

                    return amount;

                }

            };

        }]);

})();