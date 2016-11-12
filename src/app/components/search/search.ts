import { IMovie, MovieService } from '../../components/movie/movie';

/** @ngInject */
export function SearchDirective(): angular.IDirective {
    return {
        restrict: 'E',
        templateUrl: 'app/components/search/search.html',
        controller: 'SearchController',
        controllerAs: 'vm'
    };

}

/** @ngInject */
export class SearchController {
  static $inject = ['MovieService', '$state', '$log'];
    public search: string;
    constructor(public movieService: MovieService, private $state: ng.ui.IStateService, private $log: angular.ILogService) {
        this.search = '';
    }

    querySearch() {
        this.$log.info('Searching movie: ', this.search);
        return this.movieService.getMovies(this.search).then((data: IMovie[]) => {
            this.$log.info('Movie results: ', data);
            return data;
        });
    }

    selectItem(movie: IMovie) {
        this.$state.go('detail', { id: movie.id });
    }
}
