import { AppPage } from './app.po';

describe('issue-tracker App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should add entered match', () => {

      page.navigateToMatches();
      const initialMatchCount = page.getMatchCount();

      page.navigateToNewMatch();
      const button = page.getCreateButton();

      const homeInput = page.getHomeInput();
      const awayInput = page.getAwayInput();
      homeInput.sendKeys('home');
      awayInput.sendKeys('away');

      button.click();
      expect(page.getMatchCount()).toBeGreaterThan(initialMatchCount);

    });

});
