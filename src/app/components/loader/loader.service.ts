export function LoaderDirective(): angular.IDirective {
    return {
        restrict: 'E',
        templateUrl: 'app/components/loader/loader.html',
        controller: 'LoaderController',
        controllerAs: 'vm'
    };

}


export class LoaderController {
    static $inject = ['LoaderManager'];
    /** @ngInject */
    constructor(public load: LoaderManager) { }
}


export class LoaderManager {
    static $inject = ['$log'];
    private loadNumber: number = 0;
    /** @ngInject */
    constructor(private $log: angular.ILogService) {
    }

    isLoading() {
        return this.loadNumber > 0;
    }

    add() {
        this.$log.debug('Loader added');
        return this.loadNumber++;
    }

    remove() {
        this.$log.debug('Loader removed');
        if (this.loadNumber === 0) {
            return this.loadNumber;
        }
        return this.loadNumber--;
    }
}
