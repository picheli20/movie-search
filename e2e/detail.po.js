/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var DetailPage = function() {
  this.detail = element(by.css('.detail-content'));
  this.movieTitleEl = this.detail.element(by.css('.details h1'));
  this.descriptionEl = this.detail.element(by.css('.description'));
  this.posterEl = this.detail.element(by.css('.poster img'));
  this.otherInfoEl = this.detail.element(by.css('.content'));

  this.header = element(by.css('.search-bar'));
  this.backBtn = this.header.element(by.css('.btn'));
  this.searchEl = this.header.element(by.css('search input'));
};

module.exports = new DetailPage();
