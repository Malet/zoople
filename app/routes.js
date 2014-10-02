(function(){
  app.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
      controller: 'HomeCtrl',
      templateUrl: '/app/views/index.html'
    }).otherwise({ redirectTo: '/' });
  });
})();
