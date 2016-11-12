export class MainController {
  public search: string;
  public state: ng.ui.IStateService;
  public currentPhrase: String;
  public phrases: String[] = [
    'Hey there! Let\'s search a movie?',
    'Ahoy! Looking for a movie?',
    'Hello, searching for same movie?',
    'Shacha! Have you seen Star Trek yet? Search for it. ',
    'Hi Human! Looking for same robot to search a movie?',
    'Whatsssuupp, looking for a good movie?',
    'You already know what to do :)'
  ];
  /* @ngInject */
  constructor() {
    this.currentPhrase = this.getRandomPhrase();
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
}
