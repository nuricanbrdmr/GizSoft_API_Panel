var app = angular.module('app', ['ngRoute', 'ngSanitize', 'ngMaterial', 'ngMessages', 'ngAnimate']);


app.directive("gizTabControl", function () {
    return {
        restrict: 'EA',
        scope: { tabControl: '=' },
        template: `<div class="TabContainer" id="TC">
    <div class="TabButonContainer movementTab">
        <div class="TabButon" ng-repeat="item in tabControl.Tabs" ng-class="{'active' : tabControl.activeTabIndex==$index}" ng-click="NavigateToTab(item)">{{item.TabName}}

        <i ng-click="CloseTab(item)" class="material-icons close">close</i>
        </div>

    </div>
    <div class="TabPanelContainer"  ng-repeat="item in tabControl.Tabs" dynamic="item.HTML" ng-show="tabControl.activeTabIndex==$index">

     </div>

     </div>`,
        transclude: true,
        replace: true,
        link: function (scope, element, attrs) {


            if (scope.tabControl == null) {
                scope.tabControl = {
                    activeTabIndex: -1,
                    Tabs: [],
                    ActiveTab: []
                };
            }

            scope.CloseTab = function (tab) {
                var index = scope.tabControl.Tabs.indexOf(tab);
                scope.tabControl.Tabs.splice(index, 1);
                if (scope.tabControl.activeTabIndex >= scope.tabControl.Tabs.length) {
                    scope.tabControl.activeTabIndex = scope.tabControl.Tabs.length - 1;
                };
                if (scope.tabControl.activeTabIndex >= 0)
                    scope.tabControl.ActiveTab = scope.tabControl.Tabs[scope.tabControl.activeTabIndex];

                tab.Ctrl.onClose();
            }
            scope.tabControl.onReloadAll = function () {
                angular.forEach(scope.tabControl.Tabs, function (value, key) {
                    if (value.Ctrl.isReloadable) {
                        value.Ctrl.isNeedReLoad = true;
                    }

                });
                if (scope.tabControl.ActiveTab != null && scope.tabControl.ActiveTab.Ctrl.isReloadable) {
                    scope.tabControl.ActiveTab.Ctrl.onResume();
                }
            };
            scope.NavigateToTab = function (tab) {
                if (scope.tabControl.ActiveTab == tab)
                    return;

                var oldTab = scope.tabControl.ActiveTab;

                scope.tabControl.activeTabIndex = scope.tabControl.Tabs.indexOf(tab);
                scope.tabControl.ActiveTab = tab;
                tab.Ctrl.onResume();

                if (oldTab != scope.tabControl.ActiveTab && oldTab != null) {

                    oldTab.Ctrl.onPause();
                }
            };

        }
    };
});


var root, layout;
app.controller("rootController", function ($rootScope, $scope, $http, $sce, $window) {

    $scope.theme = "light";
    console.log($scope.theme)

    BuildRoot($rootScope, $http, $sce, $window);
    $rootScope.isAdmin = true

    var scope = BuildTabControl($scope);
    layout = scope;
    this.animationsEnabled = true;
    root.BigWaiting = 0;


    const toggleElements = document.querySelectorAll(".menu-link");
    const menuDetail = document.querySelector(".menu-details");
    var oldTarget = null;
    toggleElements.forEach((toggleElement) => {
        toggleElement.addEventListener("click", () => {
            const target = toggleElement.getAttribute("data-target");
            if (oldTarget == null) {
                oldTarget = target;
                menuDetail.classList.toggle("toggle");
            } else if (oldTarget != target) {
                oldTarget = target;
            }
            else {
                menuDetail.classList.toggle("toggle");
            }

        });
    });


    // Baþlangýçta seçili menüyü belirleyin (varsayýlan olarak 'Loglar' seçili olsun)
    if (!$(".menu-details").hasClass("toggle")) {
        $scope.selectedMenu = 'Loglar';
        $scope.showContent = function (menuName) {
            $scope.selectedMenu = menuName;
            //console.log($scope.selectedMenu);
            switch ($scope.selectedMenu) {
                case 'Loglar':
                    $scope.logsItems = [
                        { name: 'Contract Testing' },
                        { name: 'Integration Testing' },
                        { name: 'Intro to Writing Tests' },
                        { name: 'Performance Testing' }
                    ];
                    break;
                case 'Apiler':
                    $scope.logsItems = [
                        { name: 'Contract Testing' },
                        { name: 'Integration Testing' },
                        { name: 'Intro to Writing Tests' },
                    ];
                    break;
                case 'Kullanicilar':
                    $scope.logsItems = [
                        { name: 'Contract Testing' },
                        { name: 'Integration Testing' },
                        { name: 'Intro to Writing Tests' },
                        { name: 'Performance Testing' }
                    ];
                    break;
                case 'Baglantilar':
                    $scope.logsItems = [
                        { name: 'Contract Testing' },
                        { name: 'Integration Testing' },
                        { name: 'Intro to Writing Tests' },
                        { name: 'Performance Testing' }
                    ];
                    break;
                case 'Servisler':
                    $scope.logsItems = [
                        { name: 'Contract Testing' },
                        { name: 'Integration Testing' },
                        { name: 'Intro to Writing Tests' },
                        { name: 'Performance Testing' }
                    ];
                    break;
                case 'endPoints':
                    $scope.logsItems = [
                        { name: 'Contract Testing' },
                        { name: 'Integration Testing' },
                        { name: 'Intro to Writing Tests' },
                        { name: 'Performance Testing' }
                    ];
                    break;
            } //switch sonu

        }; // showContent sonu
    }   // if sorgu sonu
    
});



function BuildRoot($rootScope, $http, $sce, $window) {
    if (root == null) {


        //Temel
        root = $rootScope;
        root.nullValue = null;
        root.Waiting = 0;
        root.BigWaiting = -1;
        root.setLocal = function (name, value) {
            localStorage[name] = JSON.stringify(value);
        }
        root.getLocal = function (name) {
            if (localStorage[name] == null)
                return null;
            return JSON.parse(localStorage[name]);
        }
        root.setLocalValue = function (name, value) {

            localStorage[name] = value;
        }
        root.getLocalValue = function (name) {
            if (localStorage[name] == null)
                return null;
            return localStorage[name];
        }

        root.setSession = function (name, value) {
            sessionStorage[name] = JSON.stringify(value);
        }
        root.getSession = function (name) {


            if (sessionStorage[name] == null)
                return null;

            return JSON.parse(sessionStorage[name]);
        }

        root.setSessionValue = function (name, value) {
            sessionStorage[name] = value;
        }
        root.getSessionValue = function (name) {
            return sessionStorage[name];
        }

        root.trustAsResourceUr = function (url) {

            return $sce.trustAsResourceUrl(url);

        }


        root.OpenTab = function (tabControl, url, name = '', id = 0) {

            root.tabControl = tabControl;

            var oldTab = tabControl.ActiveTab;

            tabControl.ActiveTab = tabControl.Tabs.filter(t => t.TabURL == url && t.TabName == name && t.ID == id)[0];

            if (tabControl.ActiveTab != null) {
                tabControl.activeTabIndex = tabControl.Tabs.indexOf(tabControl.ActiveTab);
                tabControl.ActiveTab.Ctrl.onResume();
            }
            else {
                var tab = {
                    "TabURL": url,
                    "HTML": "",
                    TabName: name,
                    ID: id
                };
                root.httpGet({
                    url: url,
                    success: function (res) {
                        tab.HTML = $sce.trustAsHtml(res.data);
                        tabControl.Tabs.push(tab);
                        tabControl.activeTabIndex = tabControl.Tabs.length - 1;
                        tabControl.ActiveTab = tabControl.Tabs[tabControl.activeTabIndex];

                    }
                });
            }

            if (oldTab != tabControl.ActiveTab && oldTab != null) {
                oldTab.Ctrl.onPause();
            }
        }
      

        //HTTpRequest
        root.httpGet = function ({ url: url, success: success, error: error, useWaiting: useWaiting, scope: scope }) {
            root.httpExecute({
                method: 'GET',
                url: url,
                success: success,
                error: error,
                useWaiting: useWaiting,
                scope: scope
            });
        }
        root.httpDelete = function ({ url: url, success: success, error: error, useWaiting: useWaiting, scope: scope }) {
            root.httpExecute({
                method: 'DELETE',
                url: url,
                success: success,
                error: error,
                useWaiting: useWaiting,
                scope: scope
            });
        }
        root.httpPost = function ({ url: url, data: data, success: success, error: error, useWaiting: useWaiting, scope: scope }) {
            root.httpExecute({
                method: 'POST',
                url: url,
                data: data,
                success: success,
                error: error,
                useWaiting: useWaiting, scope: scope
            });
        }
        root.httpExecute = function ({ method: method, url: url, data: data, success: success, error: error, useWaiting: useWaiting, scope: scope }) {
            if (!url.startsWith('http'))
                url = window.location.origin + "/" + url;


            if (scope == null)
                scope = root;

            if (useWaiting == null)
                useWaiting = true;

            var req = {
                method: method,
                url: url,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'CacheControl': 'no-Cache',
                    'Authorization': 'bearer ' + root.getLocalValue('Token')
                },
                data: data
            };

            if (useWaiting)
                scope.Waiting += 1;

            $http(req).then(
                function (res) {
                    success(res);
                    if (useWaiting && scope.Waiting > 0)
                        scope.Waiting -= 1;
                },
                function (res) {
                    if (useWaiting && scope.Waiting > 0)
                        scope.Waiting -= 1;

                    if ($window.location.href != window.location.origin + homeUrl + 'Admin/Login' && url.startsWith(window.location.origin + homeUrl) && res.status == 401) {
                        $window.location.href = window.location.origin + homeUrl + 'Admin/Login';
                    }

                    if (error != null) {
                        error(res);
                    }

                }
            )

        }

    }
}
function BuildTabControl(scope) {
    scope.tabControl = {
        activeTabIndex: -1,
        Tabs: [],
        ActiveTab: null
    };
    scope.OpenTab = function (url, name = '', id = 0) {
        root.OpenTab(scope.tabControl, url, name, id);
    };
    scope.CloseTab = function (tab) {
        var index = scope.tabControl.Tabs.indexOf(tab);
        scope.tabControl.Tabs.splice(index, 1);
        if (scope.tabControl.activeTabIndex >= scope.tabControl.Tabs.length) {
            scope.tabControl.activeTabIndex = scope.tabControl.Tabs.length - 1;
        };
        if (scope.tabControl.activeTabIndex >= 0)
            scope.tabControl.ActiveTab = scope.tabControl.Tabs[scope.tabControl.activeTabIndex];

        tab.Ctrl.onClose();
    }
    scope.tabControl.onReloadAll = function () {
        angular.forEach(scope.tabControl.Tabs, function (value, key) {
            if (value.Ctrl.isReloadable) {
                value.Ctrl.isNeedReLoad = true;
            }

        });
        if (scope.tabControl.ActiveTab != null && scope.tabControl.ActiveTab.Ctrl.isReloadable) {
            scope.tabControl.ActiveTab.Ctrl.onResume();
        }
    };
    scope.NavigateToTab = function (tab) {
        if (scope.tabControl.ActiveTab == tab)
            return;

        var oldTab = scope.tabControl.ActiveTab;

        scope.tabControl.activeTabIndex = scope.tabControl.Tabs.indexOf(tab);
        scope.tabControl.ActiveTab = tab;
        tab.Ctrl.onResume();

        if (oldTab != scope.tabControl.ActiveTab && oldTab != null) {

            oldTab.Ctrl.onPause();
        }
    };

    return scope;
}
function BuildTabPage(scope,
    { title: title, isReloadable: isReloadable, onRefresh: onRefresh, onResume: onResume, onPause: onPause, onClose: onClose }) {
    scope.tabControl.Tabs[scope.tabControl.activeTabIndex].Ctrl = scope;
    scope.tab = scope.tabControl.Tabs[scope.tabControl.activeTabIndex];
    scope.TabName = title;
    scope.isNeedReLoad = false;
    scope.isReloadable = isReloadable ?? false;
    scope.TabWaiting = 0;
    scope.isShowFilter = true;
    scope.ShowHideFilter = function () {
        scope.isShowFilter = !scope.isShowFilter;
    }
    scope.onResume = onResume ?? function () { };
    scope.onPause = onPause ?? function () { };
    scope.onClose = onClose ?? function () { };
    scope.onRefresh = onRefresh ?? function () { };
    return scope;
}


