module.exports.config = {
  specs: ['specs/*.spec.js'],
  onPrepare: () => {
    browser.waitForAngularEnabled(false)
  }
}

