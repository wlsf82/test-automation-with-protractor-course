module.exports = providedConfig => {
  const defaultConfig = {
    baseUrl: 'https://notes-serverless-app.com',
    specs: ['../specs/*.spec.js'],
    onPrepare: () => {
      browser.driver.manage().window().maximize()
      browser.waitForAngularEnabled(false)
    }
  }

  return { ...defaultConfig, ...providedConfig }
}
