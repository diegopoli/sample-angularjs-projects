import { ComponentsDatabindingPage } from './app.po';

describe('components-databinding App', () => {
  let page: ComponentsDatabindingPage;

  beforeEach(() => {
    page = new ComponentsDatabindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
