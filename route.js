angular.module("myapp",['ngRoute','ngAnimate','services','ctrls']).config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{templateUrl:"index1.html",controller:"index"}).when('/list/:id',{templateUrl:"list.html",controller:"list"}).
        when('/show/:id',{templateUrl:"show.html",controller:"show"})
}])