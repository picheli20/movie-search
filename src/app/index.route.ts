/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/pages/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('detail', {
      url: '/detail/:id',
      templateUrl: 'app/pages/detail/detail.html',
      controller: 'DetailController',
      controllerAs: 'detail'
    });

  $urlRouterProvider.otherwise('/');
}
