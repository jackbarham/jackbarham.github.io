(function() {
    'use strict';

    angular
        .module( 'plAssessment')
        .provider('Config', function() {

            this.documentRoot = '/';

            this.$get = function() {

                var documentRoot = this.documentRoot;

                return {
                    getDocumentRoot: function() {
                        return documentRoot
                    }
                }
            };

            this.setDocumentRoot = function(path) {
                this.documentRoot = path;
            };

        });

})();