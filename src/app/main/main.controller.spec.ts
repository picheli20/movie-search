import { MainController } from './main.controller';

describe('controllers', () => {
  let mainController: MainController;

  beforeEach(angular.mock.module('movieSearch'));

  beforeEach(inject(($controller: angular.IControllerService, toastr: any) => {
    spyOn(toastr, 'info').and.callThrough();

    mainController = $controller('MainController');
  }));

  it('should return true', () => {
    expect(true).toBeTruthy();
  });
});
