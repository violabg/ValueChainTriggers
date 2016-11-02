import { ValueChainTriggersPage } from './app.po';

describe('value-chain-triggers App', function() {
  let page: ValueChainTriggersPage;

  beforeEach(() => {
    page = new ValueChainTriggersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
