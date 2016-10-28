import { CookShopPage } from './app.po';

describe('cook-shop App', function() {
  let page: CookShopPage;

  beforeEach(() => {
    page = new CookShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
