const path = require('path');
require('babel-core/register');

// This config file is used to validate the pre-defined
// reusable generic step definitions in this repo and runs on the CI

const specsPath = 'testsToValidateStepDefinitions';
const outputPath = 'uiTestResult';
const courgettePath = 'uiTestHelpers';

exports.pomConfig = {
  outputPath,
  timeoutInSeconds: process.env.COURGETTE_TIMEOUT || 10,
  pagesPath: path.resolve(specsPath, 'pages'),
  componentsPath: path.resolve(specsPath, 'components'),
  stepsPath: path.resolve(specsPath, 'stepDefinitions'),
  baseUrl: 'http://localhost:3005',
  minifyPng: false,
};

exports.cucumberHtmlReporterConfig = {};

const runHeadless = !(process.env.COURGETTE_HEADLESS === 'false' || process.env.DH);

const capabilities = {
  chrome: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: ['--window-size=1100,800', '--allow-insecure-localhost', '--no-sandbox']
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
    // change acceptInsecureCerts to true if you are testing on https and using self-signed certs
    // 'shardTestFiles': !tags && !process.env.COURGETTE_LINEARISE && !process.env.COURGETTE_SHOW_STEP_DEFINITION_USAGE,
    // 'maxInstances': 4,
    ...browserCapability,
  },
  cucumberOpts: {
    'fail-fast': true,
    'require': [
      // `${specsPath}/helpers/globals.js`,
      `${courgettePath}/globals.js`,
      `${courgettePath}/hooks/attachScenarioNameBefore.js`,
      `${courgettePath}/hooks/attachScreenshotAfter.js`,
      `${courgettePath}/hooks/deleteAllCookies.js`,
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
      'cucumberFormatter.js',
      `json:./${outputPath}/report.json`,
    ].concat(process.env.COURGETTE_SHOW_STEP_DEFINITION_USAGE ? 'node_modules/cucumber/lib/formatter/usage_formatter.js' : []),
    'format-options': '{"colorsEnabled": true}',
    'profile': false,
    'no-source': true,
  },
  onPrepare: () => { browser.ignoreSynchronization = true; },
  plugins: [{
    package: 'protractor-console-plugin',
    failOnWarning: false,
    failOnError: true,
    logWarnings: true,
    exclude: [],
  }],
};

exports.config = protractorConfig;
