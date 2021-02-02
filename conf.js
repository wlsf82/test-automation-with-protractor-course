module.exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/*.spec.js'],
  onPrepare: () => {
    browser.waitForAngularEnabled(false)
  }
}

