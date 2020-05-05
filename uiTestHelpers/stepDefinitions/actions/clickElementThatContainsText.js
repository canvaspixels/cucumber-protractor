const path = require('path');
const { pomConfig } = require(path.join(process.cwd(), process.env.confFile || 'courgette-conf.js'));

module.exports = async function clickElementThatContainsText(nth, text) {
  //* [contains(text(),'match')]
  let xpath = `//*[contains(text(),"${text}") or contains(@value,"${text}")]/ancestor-or-self::*[self::a or self::button or self::input]`;
  if (nth) {
    // remove nd from 2nd for example
    xpath = `(${xpath})[${nth.replace(/\D/g, '')}]`;
  }

  console.log('            Getting clickable element (a, input, button) by xpath:');
  console.log('              ', xpath);

  if (process.env.BINDINGS === 'WDIO') {
    const elem = await $(xpath)
    await elem.waitForClickable({ timeout: pomConfig.timeoutInSeconds * 1000 })
    return elem.click()
  }

  const elToClick = element(by.xpath(xpath));
  return browser.wait(protractor.ExpectedConditions.presenceOf(elToClick))
    .then(() => elToClick.click());
};
