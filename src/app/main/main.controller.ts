import { Movie } from '../components/movie/movie';



export class MainController {
  public classAnimation: string;
  public creationDate: number;
  public toastr: any;
  public awesomeThings: any;
  public search: Movie;

  /* @ngInject */
  constructor(toastr: any) {
    this.awesomeThings = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      }
    ];
    this.classAnimation = '';
    this.creationDate = 1478888587124;
    this.toastr = toastr;

    this.search = {
      'title': ''
    };
  }
}
