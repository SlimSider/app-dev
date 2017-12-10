import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToMatches() {
    return browser.get('/match');
  }

  navigateToNewMatch() {
    return browser.get('/match/new');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getHomeInput() {
    return element(by.css('div.form-control:nth-child(1) input'));
  }

  getAwayInput() {
    return element(by.css('div.form-control:nth-child(2) input'));
  }

  getCreateButton() {
    return element(by.css('form > button'));
  }

  getMatchCount() {
    return element.all(by.css('mat-row')).count();
  }

}
