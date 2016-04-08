(function() {
    'use strict';

    angular
        .module( 'plAssessment',
            [
                'ui.router',
                'ngResource',
                'LocalStorageModule',
                'ngAnimate'
            ]
        )
        .config([ '$httpProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', 'localStorageServiceProvider', 'ConfigProvider',
            function( $httpProvider, $stateProvider, $urlRouterProvider, $locationProvider, localStorageServiceProvider, ConfigProvider) {

                var documentRoot = '/'; // Change to '/bundles/pleassessment/'
                ConfigProvider.setDocumentRoot(documentRoot);

                $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

                localStorageServiceProvider.setPrefix('PLE');

                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: true
                });

                $stateProvider
                    .state('page', {
                        views: {
                            page: {
                                templateUrl: documentRoot+'views/page.html',
                                controller: 'PageCtrl'
                            }
                        }
                    })
                    .state('page.welcome', {
                        url: '/', // '/assessment/'
                        views: {
                            content: {
                                templateUrl: documentRoot+'views/welcome.html',
                                controller: 'WelcomeCtrl'
                            }
                        }
                    })
                    .state('page.section', {
                        url: '/assessment/section/:section_index',
                        views: {
                            content: {
                                templateUrl: documentRoot+'views/section.html',
                                controller: 'SectionCtrl'
                            }
                        }
                    })
                    .state('page.question', {
                        url: '/assessment/section/:section_index/question/:question_index',
                        views: {
                            content: {
                                templateUrl: documentRoot+'views/question.html',
                                controller: 'QuestionCtrl'
                            }
                        }
                    })
                    .state('page.confirmation', {
                        url: '/assessment/confirmation/',
                        views: {
                            content: {
                                templateUrl: documentRoot+'views/confirmation.html',
                                controller: 'ConfirmationCtrl'
                            }
                        }
                    });

                $urlRouterProvider
                    .otherwise('/assessment/');

            } ])
        .run(['$rootScope','App', function($rootScope, App) {
            
            App.Display.showLoader({
                message: 'Loading Student'
            });

            App.User.loadUser(function(){
                App.Data.loadData(function(){
                    App.Display.hideLoader();
                });
            });

        } ]);

})();