(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .factory('User', ['Api', function(Api) {

            var user = {};

            return {

                loadUser: function(callback){

                    Api.getStudent(function(response){
                        
                        user = response;
                        user.assessmentId = user.school_year < 7 ? 4 : 2;
                        
                        if(callback) callback();
                        
                    });

                },
                
                getUser: function(){
                    return user;
                },

                getUserAttribute: function(attribute){
                    return user[attribute];
                }

            };

        }]);

})();