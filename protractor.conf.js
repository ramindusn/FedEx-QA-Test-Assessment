// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

var reporter = require('cucumber-html-reporter');

exports.config = {
  debug: false,
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  allScriptsTimeout: 45000,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'), 
  cucumberOpts: {
    strict: true,
    require: [
      './e2e/**/*.steps.ts','./e2e/support/hooks.ts'
    ],
    format: [
      'json:./e2e/test-reports/cucumber-test-results.json'
    ]
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });
  },
  // Run this after completing all tests 
  onComplete:()=>{
    //Generates 'cucumberReport.html' to 'test-reports' directory by referring to 'cucumber-test-results.json' in 'test-reports' directory
    var options = {
      theme: 'bootstrap',
      jsonFile:'./e2e/test-reports/cucumber-test-results.json',
      output: './e2e/test-reports/cucumberReport.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
          "App Version":"1.0.0",
          "Test Environment": "QA",
          "Browser": "Chrome  89.0.4389.82",
          "Platform": "macOS BigSur",
          "Parallel": "Scenarios",
          "Executed": "Local"
      }
  };
  reporter.generate(options);
  }
};
