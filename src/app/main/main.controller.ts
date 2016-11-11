import { Movie } from '../components/movie/movie';



export class MainController {
  public search: Movie;
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

  /* @ngInject */
  constructor() {
    this.currentPhrase = this.getRandomPhrase(); 

    this.search = {
      'title': '' 
    };
  }
  querySearch(query : String){
      // var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
      //     deferred;
      // if (self.simulateQuery) {
      //   deferred = $q.defer();
      //   $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      //   return deferred.promise;
      // } else {
      //   return results;
      // }

      return [
				{
					'title': 'Stranger Things',
					'id': 'tt4574334',
					'url': 'http://www.imdb.com/title/tt4574334/?ref_=fn_al_tt_1',
					'thumbnail': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_UX32_CR0,0,32,44_AL_.jpg'
				},
				{
					'title': 'Arrow',
					'id': 'tt2193021',
					'url': 'http://www.imdb.com/title/tt2193021/?ref_=fn_al_tt_2',
					'thumbnail': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3OTc3OTg4MV5BMl5BanBnXkFtZTgwMjE5MTIxMDI@._V1_UX32_CR0,0,32,44_AL_.jpg'
				},
				{
					'title': 'The Big Bang Theory',
					'id': 'tt0898266',
					'url': 'http://www.imdb.com/title/tt0898266/?ref_=fn_al_tt_3',
					'thumbnail': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUyNDMxNjQyN15BMl5BanBnXkFtZTgwNzA4NDQwMDI@._V1_UX32_CR0,0,32,44_AL_.jpg'
				},
				{
					'title': 'Doctor Strange',
					'id': 'tt1211837',
					'url': 'http://www.imdb.com/title/tt1211837/?ref_=fn_al_tt_4',
					'thumbnail': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM2ODA4MTM0M15BMl5BanBnXkFtZTgwNzE5OTYxMDI@._V1_UX32_CR0,0,32,44_AL_.jpg'
				},
				{
					'title': 'The Strain',
					'id': 'tt2654620',
					'url': 'http://www.imdb.com/title/tt2654620/?ref_=fn_al_tt_5',
					'thumbnail': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NTA4OTgxOF5BMl5BanBnXkFtZTgwMDA0ODM2OTE@._V1_UX32_CR0,0,32,44_AL_.jpg'
				},
				{
					'title': 'Dr. Strange',
					'id': 'tt0077469',
					'url': 'http://www.imdb.com/title/tt0077469/?ref_=fn_al_tt_6',
					'thumbnail': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NDkyNjI1Ml5BMl5BanBnXkFtZTcwNTI4NzAzMQ@@._V1_UX32_CR0,0,32,44_AL_.jpg'
				},
				{
					'title': 'A Street Cat Named Bob',
					'id': 'tt3606888',
					'url': 'http://www.imdb.com/title/tt3606888/?ref_=fn_al_tt_7',
					'thumbnail': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MTI1MzE5Nl5BMl5BanBnXkFtZTgwMjQzNjEzOTE@._V1_UX32_CR0,0,32,44_AL_.jpg'
				},
				{
					'title': 'A Nightmare on Elm Street',
					'id': 'tt0087800',
					'url': 'http://www.imdb.com/title/tt0087800/?ref_=fn_al_tt_8',
					'thumbnail': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0NDI3NTEwMV5BMl5BanBnXkFtZTgwNjgwNDgwNzE@._V1_UX32_CR0,0,32,44_AL_.jpg'
				},
				{
					'title': 'The Wolf of Wall Street',
					'id': 'tt0993846',
					'url': 'http://www.imdb.com/title/tt0993846/?ref_=fn_al_tt_9',
					'thumbnail': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX32_CR0,0,32,44_AL_.jpg'
				},
				{
					'title': 'E.T. the Extra-Terrestrial',
					'id': 'tt0083866',
					'url': 'http://www.imdb.com/title/tt0083866/?ref_=fn_al_tt_10',
					'thumbnail': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX32_CR0,0,32,44_AL_.jpg'
				}
			];
  }

  getRandomPhrase(){
    return this.phrases[Math.floor( Math.random() * this.phrases.length )];
  }
}
