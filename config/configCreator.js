const SpecReporter = require('jasmine-spec-reporter').SpecReporter

const specReporterConfig = {
  displayFailuresSummary: true,
  displayFailedSpec: true,
  displaySuiteNumber: true,
  displaySpecDuration: true
}

module.exports = providedConfig => {
  const defaultConfig = {
    baseUrl: 'https://notes-serverless-app.com',
    specs: ['../specs/*.spec.js'],
    onPrepare: () => {
      browser.driver.manage().window().maximize()
      browser.waitForAngularEnabled(false)
      jasmine.getEnv().addReporter(new SpecReporter(specReporterConfig))
    }
  }

  return { ...defaultConfig, ...providedConfig }
}
