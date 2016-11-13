import { SearchController } from './search';
import { MovieService } from '../movie/movie';

describe('search ', () => {
  let searchController: SearchController;
  let movieService: MovieService;
  let httpBackend: angular.IHttpBackendService;
  let state: ng.ui.IStateService;
  let $timeout : any;

  beforeEach(angular.mock.module('movieSearch'));

  beforeEach(inject(($controller: angular.IControllerService, MovieService: MovieService, $httpBackend: angular.IHttpBackendService, $injector : any) => {
    searchController = $controller('SearchController');
    movieService = MovieService;
    httpBackend = $httpBackend;
    $timeout = $injector.get('$timeout');;
  }));

  beforeEach(inject(($state: ng.ui.IStateService) => {
    state = $state;
  }));

  it('should change the state', () => {
    let param = {id : '123'};
    spyOn(state, 'go').and.callThrough();
    searchController.selectItem(param);
    $timeout.flush();
    expect(state.go).toHaveBeenCalled();
  });

  it('should search the movie', inject(() => {
    let search = '300';
    httpBackend.when('JSONP', movieService.apiMovieList + 'search?q=' + search + '&callback=JSON_CALLBACK').respond(200, {
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

    searchController.search = search;
    searchController.querySearch().then((resp : any) => {
      data = resp;
    });
    httpBackend.flush();
    expect(data.length).toBe(2);
    
  }));

});
