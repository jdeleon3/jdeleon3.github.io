import { JdAppPage } from './app.po';

describe('jd-app App', () => {
  let page: JdAppPage;

  beforeEach(() => {
    page = new JdAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
