export interface Movie {
  title: string;
  id: string;
  url : string;
  thumbnail: string;
}

/** @ngInject */
export class MovieService {
  public apiHost: string = 'http://imdb.wemakesites.net/api';

  /** @ngInject */
  constructor(private $log: angular.ILogService, private $http: angular.IHttpService) {

  }

  //The only way to make the get whithout Cross Origin error is with the $http.jsonp
  
  public getMovies(search: string): angular.IPromise<any[]> {
    return this.$http.jsonp(this.apiHost + '/search?q=' + encodeURIComponent(search) + '&callback=JSON_CALLBACK').then((response: any): any => {
        return response.data.data.results.titles;
      })
      .catch((error: any): any => {
        this.$log.error('XHR Failed for getMovies.\n', error.data);
      });
  }

  public getMovie(id: string): angular.IPromise<any[]> {
    return this.$http.jsonp(this.apiHost + '/' + id + '?callback=JSON_CALLBACK').then((response: any): any => {
        return response.data.data.results.titles;
      })
      .catch((error: any): any => {
        this.$log.error('XHR Failed for getMovie.\n', error.data);
      });
  }

}
