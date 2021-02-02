module.exports.config = {
  baseUrl: 'https://notes-serverless-app.com',
  specs: ['specs/*.spec.js'],
  onPrepare: () => {
    browser.driver.manage().window().maximize()
    browser.waitForAngularEnabled(false)
  }
}

