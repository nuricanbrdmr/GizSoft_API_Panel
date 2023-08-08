var app = angular.module('app', ['ngRoute', 'ngSanitize', 'ngMaterial', 'ngMessages', 'ngAnimate']);

app.controller('myController', function ($scope, $sce) {   
    //Modal Code
    $scope.openModal = function () {
        $('#myModal').modal('show');
    };
    $scope.closeModal = function (buton) {
        if (buton == "myModal") {
            $('#myModal').modal('hide');
        }
        $('#configureModal').modal('hide');
        $scope.selectedProject = null;
        $scope.selectedFavType = null;
    };
    $scope.openDifferentModal = function () {
        $('#myModal').modal('hide'); // İlk modalı gizle
        $('#configureModal').modal('show'); // Farklı modalı göster
        if ($scope.selectedProjectFav) {
            $scope.isNextButtonEnabled = true;
            $scope.selectedContentHeader = {
                title: $scope.selectedProjectFav.favName,
                platform: $scope.selectedProjectFav.favtype
            };
        }
    };
    $scope.backModal = function () {
        $('#configureModal').modal('hide'); // İlk modalı gizle
        $('#myModal').modal('show'); // Farklı modalı göster
    }

    $scope.selectedProjectFav = null;
    $scope.isNextButtonEnabled = false; // Başlangıçta butonu devre dışı bırakın.
    $scope.ClickFavItem = function (favItem) {
        // tıklanan öğenin işlemlerini burada yapabilirsiniz.
        $scope.selectedFavItem = favItem; // tıklanan öğeyi seçili öğe olarak işaretlemek istiyorsanız.
        $scope.isNextButtonEnabled = true; // "Next" butonunu etkinleştirin.
        $scope.selectedProjectFav = favItem;
    };


    $scope.projectType = [
        {
            icon: $sce.trustAsHtml("<i class='bx bxl-typescript'></i>"),
            name: "Type Script",
            description: "TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.",
            platforms: ["C#", "Js", "Web"],
            favTypeList: [
                { favIcon: "<i class='bx bx-code-block'></i>" , favName: "Console App", favtype: "C"}
            ]
        },
        {
            icon: "<i class='bx bx-code-block'></i>",
            name: "Console App",
            description: "A project for creating a command-line application that can run on .NET on Windows, Linux and macOS.",
            platforms: ["C#", "ASP.NET", "Web"],
            favTypeList: [
                { favIcon: "<i class='bx bx-code-block'></i>", favName: "Console App", favtype: "C" },
                { favIcon: "<i class='bx bxl-typescript'></i>", favName: "Type Script App", favtype: "Ty" }

            ]
        },
        {
            icon: "<i class='bx bxl-typescript'></i>",
            name: "Type Script",
            description: "TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.",
            platforms: ["C#", "Js", "Web"],
            favTypeList: [
                { favIcon: "<i class='bx bx-code-block'></i>", favName: "Console App", favtype: "C" }
            ]
        },
        {
            icon: "<i class='bx bx-code-block'></i>",
            name: "Console App",
            description: "A project for creating a command-line application that can run on .NET on Windows, Linux and macOS.",
            platforms: ["C#", "ASP.NET", "Web"],
            favTypeList: [
                { favIcon: "<i class='bx bx-code-block'></i>", favName: "Console App", favtype: "C" }
            ]
        },
        {
            icon: "<i class='bx bxl-typescript'></i>",
            name: "Type Script",
            description: "TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.",
            platforms: ["C#", "Js", "Web"],
            favTypeList: [
                { favIcon: "<i class='bx bx-code-block'></i>", favName: "Console App", favtype: "C" },
                { favIcon: "<i class='bx bxl-typescript'></i>", favName: "Type Script App", favtype: "C" }
            ]
        }
    ];

    $scope.selectedProject = null;
    $scope.selectedFavType = [];
    $scope.trustHtml = function (html) {
        return $sce.trustAsHtml(html);
    };
    $scope.showFavType = function (item) {
        if ($scope.selectedProject != null) {
            $scope.selectedProject = item;
            $scope.selectedProjectFav = null;
            $scope.isNextButtonEnabled = false; // "Next" butonunu etkinleştirin.
        } else {
            $scope.selectedProject = item;

        }
        $scope.selectedFavType = item.favTypeList;
    };

   

    // Modal End Code

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