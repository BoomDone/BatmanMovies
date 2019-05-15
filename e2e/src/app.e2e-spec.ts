import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a banner', () => {
    page.navigateTo();
    expect(page.getBannerImage()).toContain('comic.jpg');
  });
});
