
var app = angular.module("instantSearch", []);



function InstantSearchController($scope, $http){

	$scope.searchEndDate = "";
	$scope.searchFromDate = "";
	$scope.searchString = "";

	$scope.search = function() {
		var url = "http://localhost:8080/api/v1/employee/search?keyword=" + $scope.searchString
			      +"&startFrom=" + $scope.searchFromDate
		          +"&endAt=" + $scope.searchEndDate ;
	     console.log(url);

	     $http.get(url).success( function(response) {
	     	 console.log("response:" + response);
             $scope.items = response; 
         }, function(err) {
	     	console.log("error happened.")
		 });
	     
	};

	$scope.addEmployee = function () {
		   var item = {};
		   item.name = $scope.name;
		   item.age = $scope.age;
		   item.title = $scope.title;
		   item.startFrom = $scope.fromDate;
		   item.endAt = $scope.endDate;

		   var url = 'http://localhost:8080/api/v1/employee/', data = JSON.stringify(item);

		   $http.post(url, data).then(function (response) {
                   console.log("create success");
			       $scope.name = "";
			       $scope.age = "";
			       $scope.title = "";
			       $scope.fromDate = "";
			       $scope.endDate = "";
			       alert("Add successfully")
		   }, function (error) {
			      console.log("create error");
		   });
	};

    

  //$scope.items = [];


}
