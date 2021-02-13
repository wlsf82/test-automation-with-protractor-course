const Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
const SpecReporter = require('jasmine-spec-reporter').SpecReporter

const specReporterConfig = {
  displayFailuresSummary: true,
  displayFailedSpec: true,
  displaySuiteNumber: true,
  displaySpecDuration: true
}

const htmlReporterConfig = {
  savePath: 'assets/test-report',
  fileName: 'index',
  fixedScreenshotName: true,
  cleanDestination: true,
  consolidate: true,
  takeScreenshotsOnlyOnFailures: true,
}

module.exports = providedConfig => {
  const defaultConfig = {
    baseUrl: 'https://notes-serverless-app.com',
    specs: ['../specs/*.spec.js'],
    onPrepare: () => {
      browser.driver.manage().window().maximize()
      browser.waitForAngularEnabled(false)
      jasmine.getEnv().addReporter(new SpecReporter(specReporterConfig))
      jasmine.getEnv().addReporter(new Jasmine2HtmlReporter(htmlReporterConfig))
    }
  }

  return { ...defaultConfig, ...providedConfig }
}
