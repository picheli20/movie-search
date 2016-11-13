'use strict';

describe('The main view', function () {
  var page;
  var EC = protractor.ExpectedConditions;
  browser.get('/index.html');

  beforeEach(function () {
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function () {    
    expect(page.h1El.isPresent()).toBeTruthy();
    expect(page.inputEl.isPresent()).toBeTruthy();
  });

  it('should search for a movie and go to the page', function () {
    page.inputEl.sendKeys('300');
    browser.sleep(5000);
    page.inputEl.sendKeys(protractor.Key.ARROW_DOWN);
    page.inputEl.sendKeys(protractor.Key.TAB);
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/detail/tt0416449');
  });

});
