var mm = angular.module('ctApp', ['ngDraggable']);
mm.controller("CtController", ['$scope', function($scope) {
    $scope.delete = function(data) {
        data.nodes = [];
    };
    $scope.add = function(data) {
        var post = data.nodes.length + 1;
        var newName = data.name + '-' + post;
        data.nodes.push({name: newName,nodes: []});
    };
    //$scope.tree = [{name: "Node", nodes: []}];

    $scope.tree = [{name: "Node 1", nodes: [ {name: "Node 1-1", nodes: []} ]}];
    $scope.page = { title: "Page Title", slug: 'page-slug', tags: ['tag-1','tag-2'] };

    $scope.setSlug = function(str) {
      str = str.replace(/^\s+|\s+$/g, ''); // trim
      str = str.toLowerCase();

      // remove accents, swap ñ for n, etc
      var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
      var to   = "aaaaaeeeeeiiiiooooouuuunc------";
      for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
      }
      str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes
      $scope.page.slug = str;
    };

    $scope.addItem = function() {
        var newItemNo = $scope.page.tags.length + 1;
        $scope.page.tags.push('tag-' + newItemNo);
    };
    $scope.deleteItem = function() {

        $scope.page.tags.pop();
    };

    $scope.centerAnchor = true;
    $scope.toggleCenterAnchor = function () {
        $scope.centerAnchor = !$scope.centerAnchor
    }
    $scope.draggableObjects = [{name:'one'}, {name:'two'}, {name:'three'}];

    var onDraggableEvent = function (evt, data) {
        console.log("128", "onDraggableEvent", evt, data);
    }
    $scope.$on('draggable:start', onDraggableEvent);
   // $scope.$on('draggable:move', onDraggableEvent);
    $scope.$on('draggable:end', onDraggableEvent);
    $scope.droppedObjects1 = [];
    $scope.droppedObjects2 = [];
    $scope.onDropComplete1 = function (data, evt) {
        console.log("127", "$scope", "onDropComplete1", data, evt);
        var index = $scope.droppedObjects1.indexOf(data);
        if (index == -1)
            $scope.droppedObjects1.push(data);
    }
    $scope.onDragSuccess1 = function (data, evt) {
        console.log("133", "$scope", "onDragSuccess1", "", evt);
        var index = $scope.droppedObjects1.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects1.splice(index, 1);
        }
    }
    $scope.onDragSuccess2 = function (data, evt) {
        var index = $scope.droppedObjects2.indexOf(data);
        if (index > -1) {
            $scope.droppedObjects2.splice(index, 1);
        }
    }
    $scope.onDropComplete2 = function (data, evt) {
        var index = $scope.droppedObjects2.indexOf(data);
        if (index == -1) {
            $scope.droppedObjects2.push(data);
        }
    }
    var inArray = function (array, obj) {
        var index = array.indexOf(obj);
    }

}]);
