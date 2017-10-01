import { browser, by, element } from 'protractor';

export class WeddingMakeupArtistPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
