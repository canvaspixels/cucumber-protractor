const path = require('path');
require('babel-core/register');

const specsPath = 'uiTests';
const outputPath = 'uiTestResult';
const courgettePath = 'node_modules/courgette/uiTestHelpers';

exports.pomConfig = {
  outputPath,
  timeoutInSeconds: process.env.COURGETTE_TIMEOUT || 10, // minimum 2 or you'll see strange behaviour with some steps
  pagesPath: path.resolve(specsPath, 'pages'),
  componentsPath: path.resolve(specsPath, 'components'),
  stepsPath: path.resolve(specsPath, 'stepDefinitions'),
  baseUrl: 'https://courgette-testing.com', // <------------ SET THE URL TO YOUR PROJECT HERE
  removeOutputPathOnStart: true,
  // scrollIncrementInPx: 250, // may be needed if you have sticky elements that sit over the top of things you're trying to click
  // maxClickTries: 100, // may be needed if you have sticky elements that sit over the top of things you're trying to click
  // screenshotPath: outputPath, // not needed unless you need it to differ to the outputPath. Used for error screenshots
  // screenshotStepPath: 'stepDefinitionScreenshots', // is appended to the screenshotPath or outputPath if one isn't set. Used for screenshots in the step definitions (e.g. When I take a screenshot)
  minifyPng: false, // defaults to '0.6-0.8', can be set to the quality string or true / false
  // The following are not needed unless on Windows or are having issues with compression
  // minifyPathGlob: 'uiTestResult/*.png',
  // minifyPathOutput: 'uiTestResult',
  // minifyStepPathGlob: 'uiTestResult/stepDefinitionScreenshots/*.png',
  // minifyStepPathOutput: 'uiTestResult/stepDefinitionScreenshots',
};

exports.cucumberHtmlReporterConfig = {};

const runHeadless = !(process.env.COURGETTE_HEADLESS === 'false' || process.env.DH);

const capabilities = {
  chrome: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--window-size=1100,2000']
        .concat(runHeadless ? ['--headless', '--disable-gpu'] : []),
    },
  },
  firefox: {
    'browserName': 'firefox',
    'moz:firefoxOptions': {
      args: [].concat(runHeadless ? ['-headless'] : []),
      prefs: {
        'general.useragent.override': 'Automated tests',
      },
    },
  },
};

const browserCapability = capabilities[process.env.COURGETTE_BROWSER || 'chrome'];

const tags = process.env.COURGETTE_TAGS ? process.env.COURGETTE_TAGS.replace(',', ' or ') : '';

const protractorConfig = {
  directConnect: true,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    `${specsPath}/features/**/*.feature`,
  ],
  capabilities: {
    'acceptInsecureCerts': true, // ignores SSL warnings
    'shardTestFiles': !tags && !process.env.COURGETTE_LINEARISE && !process.env.COURGETTE_SHOW_STEP_DEFINITION_USAGE,
    'maxInstances': 4,
    ...browserCapability,
  },
  cucumberOpts: {
    'require': [
      // `${specsPath}/helpers/globals.js`,
      `${courgettePath}/globals.js`,
      `${courgettePath}/hooks/attachScenarioNameBefore.js`,
      `${courgettePath}/hooks/attachScreenshotAfter.js`,
      `${courgettePath}/hooks/pageObjectModelBefore.js`,
      `${courgettePath}/hooks/addMethodsBefore.js`,
      `${courgettePath}/hooks/setDefaultTimeout.js`,
      `${courgettePath}/stepDefinitions/*.js`,
      `${specsPath}/stepDefinitions/*.js`,
      // `${specsPath}/helpers/hooks.js`,
      `${courgettePath}/hooks/loadSteps.js`, // keep this at the end
    ],
    'tags': ['~@ignore'].concat(tags || []),
    'format': [
      'node_modules/courgette/cucumberFormatter.js',
      `json:./${outputPath}/report.json`,
    ].concat(process.env.COURGETTE_SHOW_STEP_DEFINITION_USAGE ? 'node_modules/cucumber/lib/formatter/usage_formatter.js' : []),
    'format-options': '{"colorsEnabled": true}',
    'profile': false,
    'no-source': true,
  },
  onPrepare: () => { browser.ignoreSynchronization = true; },
  // UNCOMMENT protractor-console-plugin so that you can see what's output in the Chrome devtools console in your terminal
  // plugins: [{
  //   package: 'protractor-console-plugin',
  //   failOnWarning: false,
  //   failOnError: true,
  //   logWarnings: true,
  //   exclude: [],
  // }],
};

exports.config = protractorConfig;
