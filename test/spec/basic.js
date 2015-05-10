describe('Basic Homepage', function() {
  it('should load', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('International Bass Station');
  });
});
