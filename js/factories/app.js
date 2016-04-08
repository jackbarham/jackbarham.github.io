(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .factory('App', ['User', 'Data', 'Api', 'Display', 'Navigation', function(User, Data, Api, Display, Navigation) {

            return {
                User: User,
                Data: Data,
                Api: Api,
                Display: Display,
                Navigation: Navigation
            };

        }]);

})();