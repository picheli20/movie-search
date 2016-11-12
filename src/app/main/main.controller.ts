import { Movie, MovieService } from '../components/movie/movie';



export class MainController {
  public search: Movie;
  public state: ng.ui.IStateProvider;
  public currentPhrase: String;
  public phrases: String[] = [
      'Hey there! Let\'s search a movie?',
      'Ahoy! Looking for a movie?',
      'Hello, searching for same movie?',
      'Shacha! Have you seen star trek yet? Search for it. ',
      'Hi Human! Looking for same robot to search a movie?',
      'Whatsssuupp, looking for a good movie?',
      'You already know what to do :)'
    ];

  static $inject = ['MovieService', '$state'];
  /* @ngInject */
  constructor(public movieService:MovieService, private $state: ng.ui.IStateProvider) {
    this.currentPhrase = this.getRandomPhrase(); 
    this.state = $state;
    this.search = {
      'title': '' 
    };
  }
  querySearch(){
      // var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
      //     deferred;
      // if (self.simulateQuery) {
      //   deferred = $q.defer();
      //   $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      //   return deferred.promise;
      // } else {
      //   return results;
      // }

      return this.movieService.getMovies(this.search.title).then((data : Movie[]) => {
        return data;
      });
  }

  selectItem(movie: Movie){
    this.state.go('detail', {id : movie.id});
  }

  getRandomPhrase(){
    return this.phrases[Math.floor( Math.random() * this.phrases.length )];
  }
}
