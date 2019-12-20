const path = require('path');

module.exports = (name, world, elLocators, type = 'component', customMethods = {}) => {
  const components = {};
  const locators = elLocators;
  console.log('elLocators', elLocators);
  

  const locatorErrorCheck = (locator) => {
    if (!locators[locator]) {
      console.log(`Error: The locator named "${locator}" does not exist for the ${name} ${type}`);
    }
  };

  return Object.assign({}, {
    name,
    type,
    locators,

    addComponents(args) {
      args.forEach((component) => {
        const componentInstance = component(world);
        const componentName = componentInstance.name;
        components[componentName] = componentInstance;

        Object.keys(componentInstance.locators).forEach((locatorName) => {
          if (locators[locatorName]) {
            console.error(`Error: Cannot add component "${componentName}" ${componentInstance.type} into the ${name} ${type} because there is an element name locator conflict.`);
            console.error(`Both have the same locator name "${locatorName}"`);
            throw new Error(`Cannot add component "${componentName}" ${componentInstance.type} into the ${name} ${type} because there is an element name locator conflict.
              Both have the same locator name "${locatorName}"\n`);
          }

          locators[locatorName] = componentInstance.locators[locatorName];
        });
      });

      return this;
    },

    getComponent(componentName) {
      if (!components[componentName]) {
        console.error(`Error: getComponent(): No component named ${componentName} ${type} has been added`);
      }

      return components[componentName];
    },

    getElement: async (locator) => {
      locatorErrorCheck(locator);

      return await world.screen.$(locators[locator].selector);
    },

    getSelectorFromLocatorKey(locatorKey) {
      if (locators[locatorKey]) {
        return locators[locatorKey].value;
      }
      return null;
    },
  }, customMethods);
};

module.exports.getFileName = (fileName) =>
  path.basename(fileName).replace(/\.js$/, '');
