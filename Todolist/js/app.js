var app = angular.module("TodoApp",[]);
app.controller("TodoController",function ($scope) {
    $scope.todos=[
        {"ad":"gorulecek 1","isdone":false},
        {"ad":"gorulecek 2","isdone":false},
        {"ad":"gorulecek 3","isdone":false},
        {"ad":"gorulecek 4","isdone":false},
        {"ad":"gorulecek 5","isdone":false},
        
    ];
    $scope.NewTodo=function(){
        $scope.todos.push({
            "ad":$scope.todo,
            "isdone":false

            });
            $scope.todo=""
    };
    $scope.DeleteTodos = function(){
        $scope.todos = $scope.todos.filter(function(item){
            return !item.isdone;
        })
    }
});