import { IMovie, MovieService } from '../../components/movie/movie';

export class DetailController {
    static $inject = ['$state', '$log', 'MovieService'];
    public movie: IMovie = {
        id: ''
    };
    public params: any;
    constructor(private $state: ng.ui.IStateService, private $log: angular.ILogService, private movieService : MovieService) {
        this.params = $state.params;
        this.movie.id = String(this.params.id);
        movieService.getMovie(this.movie.id).then((data : IMovie) => {
            $log.debug('Movie infos: ', data);
            this.movie = data;
        });
    }
}
