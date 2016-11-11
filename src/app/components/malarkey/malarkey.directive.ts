interface IProjectsScope extends angular.IScope {
  extraValues: any[];
}

/** @ngInject */
export function acmeMalarkey(malarkey: any): angular.IDirective {

  return {
    restrict: 'E',
    scope: {
      extraValues: '='
    },
    template: '&nbsp;',
    link: linkFunc,
    controller: MalarkeyController,
    controllerAs: 'vm'
  };

}

function linkFunc(scope: IProjectsScope, el: JQuery, attr: any, vm: MalarkeyController) {
  var watcher;
  var typist = vm.malarkey(el[0], {
    typeSpeed: 50,
    deleteSpeed: 80,
    pauseDelay: 1000,
    loop: true,
    postfix: ' '
  });

  el.addClass('acme-malarkey');

  angular.forEach(scope.extraValues, function(value: string) {
    typist.type(value).pause().delete();
  });

  watcher = scope.$watch('vm.movies', function(current: String, original: String) {
    angular.forEach(vm.movies, function(movie: String) {
      typist.type(movie).pause().delete();
    });
  });

  scope.$on('$destroy', function () {
    watcher();
  });
}

/** @ngInject */
export class MalarkeyController {
  public movies: any[];


  constructor(private $log: angular.ILogService, public malarkey: any) {
    $log.info('acme-malarkey runningc');
    this.movies = ['The Godfather', 'Fight Club', 'Star Wars'];
    this.activate();
  }

  activate() {
    return this.movies;
  }
}
