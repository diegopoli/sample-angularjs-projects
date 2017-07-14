import { GameControlAppPage } from './app.po';

describe('game-control-app App', () => {
  let page: GameControlAppPage;

  beforeEach(() => {
    page = new GameControlAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
