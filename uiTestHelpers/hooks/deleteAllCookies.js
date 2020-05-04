const path = require('path');

// eslint-disable-next-line
const { Before } = require(path.join(process.cwd(), 'node_modules/cucumber'));

Before(function deleteAllCookiesBeforeHook() {
  this.attach('Hook Step: deleteAllCookiesBeforeHook');
  this.deleteAllCookies = true;
  if (process.env.BINDINGS === 'WDIO') {
    browser.deleteCookies()
  } else {
    browser.manage().deleteAllCookies();
  }
});
