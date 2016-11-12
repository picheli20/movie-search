import { MovieService } from './movie';

describe('service movieService', () => {
  let movieService: MovieService;
  let httpBackend: angular.IHttpBackendService;
  let log: angular.ILogService;

  beforeEach(angular.mock.module('movieSearch'));

  beforeEach(inject((MovieService: MovieService, $httpBackend: angular.IHttpBackendService, $log: angular.ILogService) => {
    movieService = MovieService;
    httpBackend = $httpBackend;
    log = $log;
  }));

  it('should be registered', inject(() => {
    expect(movieService).not.toEqual(null);
  }));

  it('should return list of movie', inject(() => {
    httpBackend.when('JSONP', movieService.apiMovieList + 'search?q=300&callback=JSON_CALLBACK').respond(200, {
      'status': 'success',
      'code': 200,
      'message': 'ok',
      'term': '300',
      'search_url': 'http:\/\/www.imdb.com\/find?q=300&s=all5827801211e1f',
      'data': {
        'results': {
          'titles': [
            {
              'title': '300',
              'id': 'tt0416449',
              'url': 'http:\/\/www.imdb.com\/title\/tt0416449\/?ref_=fn_al_tt_1',
              'thumbnail': 'https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_UX32_CR0,0,32,44_AL_.jpg'
            },
            {
              'title': '300: Rise of an Empire',
              'id': 'tt1253863',
              'url': 'http:\/\/www.imdb.com\/title\/tt1253863\/?ref_=fn_al_tt_3',
              'thumbnail': 'https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMTEwNTU2MjAwMDdeQTJeQWpwZ15BbWU3MDk2Njc2Njk@._V1_UX32_CR0,0,32,44_AL_.jpg'
            }
          ]
        }
      }
    });
    let data: any;
    movieService.getMovies('300').then((movie : any) => {
      data = movie;
    });
    httpBackend.flush();
    expect(data.length).toBe(2);
    expect(data[0].title).toBe('300');
  }));

  it('should log a error for the list', inject(() => {
    httpBackend.when('JSONP', movieService.apiMovieList + 'search?q=300&callback=JSON_CALLBACK').respond(500);
    movieService.getMovies('300');
    httpBackend.flush();
    expect(log.error.logs).toEqual(jasmine.stringMatching('XHR Failed for'));
  }));

  it('should return one movie', inject(() => {
    let id = 'TESTE123';
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
    let data: any;
    movieService.getMovie(id).then((movie : any) => {
      data = movie;
    });
    httpBackend.flush();
    expect(data.imdbID).toBe(id);
  }));

  it('should log a error', inject(() => {
    let id = 'TESTE123';
    httpBackend.when('GET', movieService.apiMovieDetail + '?plot=short&r=json&i=' + id).respond(500);
    movieService.getMovie(id);
    httpBackend.flush();
    expect(log.error.logs).toEqual(jasmine.stringMatching('XHR Failed for'));
  }));
});
