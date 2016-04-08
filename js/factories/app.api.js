(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .factory('Api', ['$resource', function($resource) {

            return $resource('/api', {},
                {
                    'getStudent' : {
                        url : 'api/student.json', // 'api/student'
                        method : 'GET',
                        isArray : false,
                        cache : true
                    },
                    'getAssessment' : {
                        url : 'api/assessment-:assessment_id.json', // 'api/assessment/:assessment_id'
                        params: {assessment_id : '@assessment_id'},
                        method : 'GET',
                        isArray : false,
                        cache : false
                    },
                    'getAssessmentLevels' : {
                        url : 'api/assessmentlevels.json', // 'api/assessmentlevels'
                        method : 'GET',
                        isArray : true,
                        cache : true
                    },
                    'setAssessmentResults' : {
                        url : 'api/assessment/save',
                        method : 'POST'
                    }
                }
            );

        }]);

})();