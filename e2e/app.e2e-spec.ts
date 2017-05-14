import { AngularOverviewPage } from './app.po';

describe('angular-overview App', () => {
  let page: AngularOverviewPage;

  beforeEach(() => {
    page = new AngularOverviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
