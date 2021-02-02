module.exports.config = {
  baseUrl: 'https://notes-serverless-app.com',
  specs: ['specs/*.spec.js'],
  onPrepare: () => {
    browser.waitForAngularEnabled(false)
  }
}

