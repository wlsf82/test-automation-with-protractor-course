const helper = require('protractor-helper')

describe('Login', function() {
  it('logs in successfully', function() {
    browser.get('/login')

    const emailField = element(by.id('email'))
    const passwordField = element(by.id('password'))
    const loginButton = element(by.cssContainingText('button[type="submit"]', 'Login'))
    const yourNotesHeading = element(by.cssContainingText('h1', 'Your Notes'))

    helper.fillFieldWithText(emailField, 'admin@example.com')
    helper.fillFieldWithText(passwordField, 'Passw0rd!')
    helper.click(loginButton)

    helper.waitForElementVisibility(yourNotesHeading)
  })
})

