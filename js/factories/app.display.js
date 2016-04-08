(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .factory('Display', ['$rootScope', function($rootScope) {

            $rootScope.loader = {
                visible: false,
                message: null
            };

            $rootScope.progress = {
                visible: false,
                amount: 0
            };

            $rootScope.questionControls = {
                visible: false
            };

            return {

                showLoader: function(args){
                    $rootScope.loader.message = args.message;
                    $rootScope.loader.visible = true;
                },

                hideLoader: function(){
                    $rootScope.loader.visible = false;
                    $rootScope.loader.message = null;
                },

                showProgress: function(amount){
                    $rootScope.progress.amount = amount;
                    $rootScope.progress.visible = true;
                },

                hideProgress: function(){
                    $rootScope.progress.visible = false;
                },

                showQuestionControls: function(){
                    $rootScope.questionControls.visible = true;
                },

                setQuestionControls: function(obj){
                    if(obj.prev) $rootScope.questionControls.prev = obj.prev;
                    if(obj.next) $rootScope.questionControls.next = obj.next;
                    if(obj.selected !== undefined) $rootScope.questionControls.selected = obj.selected;
                },

                hideQuestionControls: function(){
                    $rootScope.questionControls.visible = false;
                }
            };

        }]);

})();