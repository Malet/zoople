(function(){
  app.controller('HomeCtrl', function($scope, Property){
    get_properties();

    function get_properties(){
      Property.fetch().then(function(data){
        $scope.properties = data
      })
    };
  });
})();
