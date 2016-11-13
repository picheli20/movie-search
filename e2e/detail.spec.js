'use strict';

describe('The detail view', function () {
  var page;
  var EC = protractor.ExpectedConditions;

  beforeEach(function () {
    browser.get('#/detail/tt0416449');
    page = require('./detail.po');
    browser.wait(EC.presenceOf(page.header), 10000);
    browser.wait(EC.presenceOf(page.detail), 10000);
  });

  it('should have the movie details', function () {
    expect(page.movieTitleEl.isPresent()).toBeTruthy();
    expect(page.descriptionEl.isPresent()).toBeTruthy();
    expect(page.posterEl.isPresent()).toBeTruthy();
    expect(page.otherInfoEl.isPresent()).toBeTruthy();
    expect(page.backBtn.isPresent()).toBeTruthy();
    expect(page.searchEl.isPresent()).toBeTruthy();
  });

  it('should go back to home', function () {
    page.backBtn.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/');
  });

});
