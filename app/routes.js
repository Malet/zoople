(function(){
  app.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
      controller: 'HomeCtrl',
      templateUrl: '/app/views/index.html'
    }).otherwise({ redirectTo: '/' });
  });
})();
