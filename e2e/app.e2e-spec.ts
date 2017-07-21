import { NgTrimValueAccessorTesterPage } from './app.po';

describe('ng-trim-value-accessor-tester App', () => {
  let page: NgTrimValueAccessorTesterPage;

  beforeEach(() => {
    page = new NgTrimValueAccessorTesterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
