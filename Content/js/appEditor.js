var app = angular.module('app', ['ngRoute', 'ngSanitize', 'ngMaterial', 'ngMessages', 'ngAnimate']);


app.controller('myController', function ($scope) {

    $scope.contentsItems = [
        { name: 'Web Service', content: 'Order', isActive: false, contents: [], orderItems: [] },
        { name: 'Windows Service', content: 'Service', isActive: false, contents: [], orderItems: [] },
    ];


    $scope.toggleItem = function (item) {
        item.isActive = !item.isActive;
    };

    $scope.addNewItemContent = function (item) {
        var newItemContent = {
            name: 'New Item',
            content: 'New Item Content',
            isActive: true,
            contents: [],
        };
        item.contents.push(newItemContent);
    };

    // Yeni fonksiyon: İç içe içerikleri eklemek için
    $scope.addOrder = function (item) {
        var newItem = {
            name: 'New sub Item',
            content: 'New sub Item Content',
            isActive: true,
            contents: [],
        }
        item.orderItems.push(newItem);
    }
   
    $scope.addSubItemContent = function (parentContent) {
        var newSubItemContent = {
            name: 'New Sub Item',
            content: 'New Sub Item Content',
            isActive: true,
        };
        console.log(parentContent);
        parentContent.contents.push(newSubItemContent);
    };

    //$scope.addNewItemContent = function (index) {
    //    // Yeni bir contentsItem nesnesi oluştur ve contentsItems dizisine ekle
    //    var newItemContent = {
    //        name: 'New Item',
    //        content: 'New Item Content',
    //        isActive: false,
    //    };
    //    $scope.contentsItems.splice(index + 1, 0, newItemContent);
    //};
});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.config(function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
});
app.service('ngDockInContainer', [function () {
    var scope = this;
    scope.inputEvent = function (event) {
        if (angular.isDefined(event.touches)) {
            return event.touches[0];
        }
        else if (angular.isDefined(event.originalEvent) && angular.isDefined(event.originalEvent.touches)) {
            return event.originalEvent.touches[0];
        }
        return event;
    };
    scope.touchTimeout = 100;
}])
app.directive('ngDockPanel', function () {
    return {
        restrict: 'EA',
        scope: {
            title: '@',
            id: '@'
        },
        templateUrl: homeUrl + 'Modal/DockInContainer',
        transclude: true,
        replace: true,
        link: function (scope, element, attrs) {
           
        }
    };
});


//app.controller("rootController", function ($rootScope, $scope, $http, $sce, $window) {


//}