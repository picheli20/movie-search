import { LoaderManager } from '../loader/loader.service';

export interface IMovie {
  id: string;
  imdbID?: string;
  title?: string;
  url?: string;
  thumbnail?: string;
}

export class MovieService {
  static $inject = ['$log', '$http', 'LoaderManager'];
  public apiMovieList: string = 'http://imdb.wemakesites.net/api/';
  public apiMovieDetail: string = 'http://www.omdbapi.com/';

  /** @ngInject */
  constructor(private $log: angular.ILogService, private $http: angular.IHttpService, private loader: LoaderManager) {
  }

  public getMovies(search: string): angular.IPromise<any[]> {
    // the only way to make the get whithout Cross Origin error is with the $http.jsonp
    return this.$http.jsonp(this.apiMovieList + 'search?q=' + encodeURIComponent(search) + '&callback=JSON_CALLBACK').then((response: any): any => {
        if(response.data.data.results && response.data.data.results.titles){
          return response.data.data.results.titles;
        }else{
          return [];
        }
      })
      .catch((error: any): any => {
        this.$log.error('XHR Failed for getMovies.\n', error.data);
      });
  }

  public getMovie(id: string): angular.IPromise<IMovie> {
    this.loader.add();
    return this.$http.get(this.apiMovieDetail + '?plot=short&r=json&i=' + id).then((response: any): any => {
        this.loader.remove();
        return response.data;
      })
      .catch((error: any): any => {
        this.loader.remove();
        this.$log.error('XHR Failed for getMovie.\n', error.data);
      });
  }

}
