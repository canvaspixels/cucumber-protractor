// eslint-disable-next-line
require('babel-register');

const specsPath = 'uiTests';
const specsPathAbs = `${process.cwd()}/${specsPath}`;
const outputPath = 'uiTestResult';
const cukeTractorPath = 'node_modules/cucumber-protractor/uiTestHelpers';

exports.pomConfig = {
  outputPath,
  timeoutInSeconds: 10,
  pagesPath: `${specsPathAbs}/pages`,
  componentsPath: `${specsPathAbs}/pages/components`,
  baseUrl: 'http://localhost:3000', // <------------ SET THE URL TO YOUR PROJECT HERE
};

exports.cucumberHtmlReporterConfig = {};

const cukeTags = process.env.cukeTags ? process.env.cukeTags.replace(',', ' or ') : '';

const protractorConfig = {
  directConnect: true,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    `${specsPath}/features/**/*.feature`,
  ],
  capabilities: {
    shardTestFiles: !cukeTags && !process.env.debug,
    maxInstances: 4,
    browserName: 'chrome',
    chromeOptions: {
      args: ['--window-size=1100,800'].concat(process.env.disableHeadless ? [] : ['--headless', '--disable-gpu']),
    },
  },
  cucumberOpts: {
    require: [
      // `${specsPath}/helpers/globals.js`,
      `${cukeTractorPath}/globals.js`,
      `${cukeTractorPath}/hooks/attachScenarioNameBefore.js`,
      `${cukeTractorPath}/hooks/attachScreenshotAfter.js`,
      `${cukeTractorPath}/hooks/pageObjectModelBefore.js`,
      `${cukeTractorPath}/hooks/addMethodsBefore.js`,
      `${cukeTractorPath}/hooks/setDefaultTimeout.js`,
      `${cukeTractorPath}/stepDefinitions/*.js`,
      `${specsPath}/stepDefinitions/*.js`,
      // `${specsPath}/helpers/hooks.js`,
    ],
    tags: ['~ignore'].concat(cukeTags || []),
    format: [
      'node_modules/cucumber-protractor/cucumberFormatter.js',
      `json:./${outputPath}/report.json`,
    ],
    profile: false,
    'no-source': true,
  },
  onPrepare: () => { browser.ignoreSynchronization = true; },
};

exports.config = protractorConfig;
