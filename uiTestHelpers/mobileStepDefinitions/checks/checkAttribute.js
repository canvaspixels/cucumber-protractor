const path = require('path');

module.exports = async function checkAttribute(locatorKey, expectedAttribute, expectedValue) {
  const pageObj = await this.getCurrentPage();
  const el = await pageObj.getElement(locatorKey);

  if (process.env.COURGETTE_DEBUG) {
    console.log('In file:', path.basename(__filename), el);
  }

  const attrVal = await el.getAttribute(expectedAttribute);

  return expect(attrVal).to.equal(expectedValue);
};
