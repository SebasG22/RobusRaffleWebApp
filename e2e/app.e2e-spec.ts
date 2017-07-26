import { RaffleAppPage } from './app.po';

describe('raffle-app App', () => {
  let page: RaffleAppPage;

  beforeEach(() => {
    page = new RaffleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
