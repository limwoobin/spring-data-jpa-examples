'use strict';

console.log('Registering AngularJS modules');

var App = angular.module('app', [
    'ngLocale',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'pascalprecht.translate',
    'ui.bootstrap',
    'ui.router',
    'ui.utils',
    'angular-growl',
    'angularMoment',

    //Partials
    'app.partials',

    //Common
    'app.common.config', 'app.common.directives', 'app.common.services',

    //Todo
    'app.todo.controllers'

]);

console.log('Registered AngularJS modules');

