import { DetailController } from './detail.controller';
import { MovieService } from '../../components/movie/movie';

describe('detailController ', () => {
    let detailController: DetailController;
    let movieService: MovieService;
    let httpBackend: angular.IHttpBackendService;
    let state: ng.ui.IStateService;
    let id: String = '123';

    beforeEach(angular.mock.module('movieSearch'));
    beforeEach(angular.mock.module(($provide : any) => {
        $provide.provider('$state', () => {
            return {
                $get: function () {
                    return {
                        params: { id: id }
                    };
                }
            };
        });
    }));

    beforeEach(inject(($controller: angular.IControllerService, MovieService: MovieService, $httpBackend: angular.IHttpBackendService) => {
        detailController = $controller('DetailController');
        movieService = MovieService;
        httpBackend = $httpBackend;
    }));

    beforeEach(inject(($state: ng.ui.IStateService) => {
        state = $state;
    }));

    beforeEach(inject(($state: ng.ui.IStateService) => {
        httpBackend.when('GET', movieService.apiMovieDetail + '?plot=short&r=json&i=' + id).respond(200, {
            'Title': '300',
            'Year': '2006',
            'Rated': 'R',
            'Released': '09 Mar 2007',
            'Runtime': '117 min',
            'Genre': 'Action, Drama, Fantasy',
            'Director': 'Zack Snyder',
            'Writer': 'Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)',
            'Actors': 'Gerard Butler, Lena Headey, Dominic West, David Wenham',
            'Plot': 'King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.',
            'Language': 'English',
            'Country': 'USA',
            'Awards': '16 wins & 42 nominations.',
            'Poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg',
            'Metascore': '52',
            'imdbRating': '7.7',
            'imdbVotes': '613,798',
            'imdbID': id,
            'Type': 'movie',
            'Response': 'True'
        });
    }));

    it('should hava the current movie', () => {
        httpBackend.flush();
        expect(detailController.movie).toBeDefined();
        expect(detailController.movie.imdbID).toBe(id);
    });

});
