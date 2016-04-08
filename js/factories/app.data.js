(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .factory('Data', ['Api', 'User', 'Display', 'localStorageService', function(Api, User, Display, localStorageService) {

            var assessment = {};
            var assessmentIndex = {};
            var assessmentLevels = {};

            var loadAssessmentLevels = function(callback){

                Display.showLoader({message:'Loading Assessment'});

                Api.getAssessmentLevels(function(response){

                    assessmentLevels = response;

                    loadAssessment(callback);

                });

            };

            var loadAssessment = function(callback){

                if(assessment = localStorageService.get(User.getUserAttribute('id'))){

                    setIndex();
                    Display.hideLoader();

                } else {

                    Api.getAssessment(
                        { assessment_id : User.getUserAttribute('assessmentId') },
                        function(response){

                            assessment = response;
                            Display.hideLoader();

                        }
                    );

                }

            };

            var setIndex = function(){

            };

            return {

                loadData: function(callback){

                    loadAssessmentLevels(callback);

                },

                getAssessment: function() {
                    return assessment;
                },

                getAssessmentLevels: function() {
                    return assessmentLevels;
                },

                setAnswer: function() {
                    
                }

            };

        }]);

})();