'use strict';

var app = angular.module('App', ['ngRoute', 'ngSanitize']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/psTherapy', {
            controller: 'psTherapyCtrl',
            templateUrl: 'templates/psTherapy.html'})
        .when('/cmArticle', {
            controller: 'cmArticleCtrl',
            templateUrl: 'templates/cmArticle.html'})
        .when('/ottukOttam', {
            controller: 'ottukOttamCtrl',
            templateUrl: 'templates/ottukOttam.html'})
        .otherwise({
            redirectTo : '/psTherapy'})
});