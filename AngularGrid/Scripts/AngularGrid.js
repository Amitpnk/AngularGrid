function AngularGridViewModel($scope, $http, UtilityObject, $q, Factory) {

    $scope.AngularGrid = Factory.Employee;
    $scope.BindGrid = [];
    $scope.Utility = UtilityObject;
    $scope.PageSize = 10;
    $scope.currentPage = 1;
    $scope.PagingMessage = "";
    $scope.search = '';
    $scope.propertyName = '';
    $scope.reverse = false;

    var defer = null;


    $scope.loadGrid = function (Index) {
        defer= $scope.Utility.initPromises($q);
        $http({
            method: "GET",
            url: "/Api/EmployeeApi?PageIndex=" + Index + "&PageSize=" + $scope.PageSize
        }).success(function (data, status, header, config) {

            $scope.BindGrid = data;
            $scope.VirtualItemCount = $scope.BindGrid[0].VirtualItemCount;
            $scope.PagingMessage = $scope.Utility.Paging($scope.BindGrid[0].VirtualItemCount, $scope.PageSize, Index);

            $scope.currentPage = Index;
        })
        .error(function (data, status, header, config) {
            defer.reject("Error while getting the data");
        });

    }

    $scope.loadGrid(1);

    $scope.sortBy = function (propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };

    $scope.prevPage = function () {
        $scope.loadGrid($scope.Utility.prevPage($scope.currentPage));
    };

    $scope.nextPage = function () {
        $scope.loadGrid($scope.Utility.nextPage($scope.currentPage, $scope.VirtualItemCount, $scope.PageSize, 10));
    }

    $scope.setPage = function () {
        $scope.currentPage = this.n;
    };


}






var MainApp = angular.module("MainPage", []);
MainApp.controller("AngularGridViewModel", AngularGridViewModel);
MainApp.service("UtilityObject", Utility);
MainApp.factory("Factory", Factory)