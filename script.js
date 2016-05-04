angular.module('app', []);

angular.module('app').controller('todoCtrl', [
	'$scope',
	function ($scope) {
	
	$scope.newTodo = {};

	$scope.todos = [
		{ text: "Get todos to add", priority: "1" },
		{ text: "Get todos to prioritize", priority: "2" },
		{ text: "Get todos to filter", priority: "3" }
	];
	

	$scope.addTodo = function(){
		$scope.todos.push($scope.newTodo);
		$scope.text = "";
		$scope.priority = "1";
		// set new todo to "empty"
		$scope.newTodo = {}; 
		console.log("New todo added");
	};

	$scope.getTodoClass = function(todo){

		switch(todo.priority){
			case "1": return 'danger';
			case "2": return 'warning';
			case "3": return 'info';
		};
	};
}]); 