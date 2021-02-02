const helper = require('protractor-helper')

describe('Login', function() {
  it('logs in and out successfully', function() {
    browser.get('/login')

    const emailField = element(by.id('email'))
    const passwordField = element(by.id('password'))
    const loginButton = element(by.cssContainingText('button[type="submit"]', 'Login'))
    const yourNotesHeading = element(by.cssContainingText('h1', 'Your Notes'))
    const logoutLink = element(by.cssContainingText('.navbar-right a', 'Logout'))

    helper.fillFieldWithText(emailField, process.env.USER_EMAIL)
    helper.fillFieldWithText(passwordField, process.env.USER_PASSWORD)
    helper.click(loginButton)

    helper.waitForElementVisibility(yourNotesHeading)

    helper.click(logoutLink)

    helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}/login`)
  })
})

