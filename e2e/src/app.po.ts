import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getBannerImage() {
    return element(by.deepCss('app-root ion-header ion-toolbar .banner')).getAttribute('src');
  }
}
