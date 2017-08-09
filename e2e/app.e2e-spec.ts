import { CygnetProductPage } from './app.po';

describe('cygnet-product App', () => {
  let page: CygnetProductPage;

  beforeEach(() => {
    page = new CygnetProductPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
