import { Tedushop.Angular2Page } from './app.po';

describe('tedushop.angular2 App', () => {
  let page: Tedushop.Angular2Page;

  beforeEach(() => {
    page = new Tedushop.Angular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
