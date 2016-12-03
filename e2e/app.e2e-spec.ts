import { AngularViernes3Page } from './app.po';

describe('angular-viernes3 App', function() {
  let page: AngularViernes3Page;

  beforeEach(() => {
    page = new AngularViernes3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
