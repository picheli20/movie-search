import { MainController } from './main.controller';

describe('Main Controller', () => {
  let mainController: MainController;

  beforeEach(angular.mock.module('movieSearch'));

  beforeEach(inject(($controller: angular.IControllerService) => {
    mainController = $controller('MainController');
  }));

  it('should get a random phrase', () => {
    var phrase: String = mainController.getRandomPhrase();
    var phraseIndex: Number = mainController.phrases.indexOf(phrase);
    expect(phraseIndex >= 0).toBeTruthy;
  });
});
