import { WeddingMakeupArtistPage } from './app.po';

describe('wedding-makeup-artist App', () => {
  let page: WeddingMakeupArtistPage;

  beforeEach(() => {
    page = new WeddingMakeupArtistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
