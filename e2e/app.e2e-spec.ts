import { CashCalculatorPage } from './app.po';

describe('cash-calculator App', () => {
  let page: CashCalculatorPage;

  beforeEach(() => {
    page = new CashCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
