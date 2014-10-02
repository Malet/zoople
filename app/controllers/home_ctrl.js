(function(){
  app.controller('HomeCtrl', function($scope, Property){
    get_properties();

    $scope.get_directions = function(origin, destination){
      Property.directions(origin, destination).then(function(response){
        alert(response.data.routes[0].legs[0].duration.text);
      })
    }

    function get_properties(){
      Property.fetch().then(function(data){
        $scope.properties = data;
      })
    };
  });
})();
