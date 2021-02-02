const helper = require('protractor-helper')

describe('Login', function() {
  let emailField
  let passwordField
  let loginButton
  let yourNotesHeading
  let logoutLink

  beforeEach(() => {
    browser.get('login')
    emailField = element(by.id('email'))
    passwordField = element(by.id('password'))
    loginButton = element(by.cssContainingText('button[type="submit"]', 'Login'))
    yourNotesHeading = element(by.cssContainingText('h1', 'Your Notes'))
    logoutLink = element(by.cssContainingText('.navbar-right a', 'Logout'))
  })

  describe('Login button verifications', () => {
    it('starts disabled', () => {
      helper.waitForElementVisibility(loginButton)

      expect(loginButton.getAttribute('disabled')).toBeDefined()
    })

    it('is kept disabled when filling only the email field', () => {
      helper.fillFieldWithText(emailField, 'test-email@example.com')

      expect(loginButton.getAttribute('disabled')).toBeDefined()
    })

    it('is kept disabled when filling only the password field', () => {
      helper.fillFieldWithText(passwordField, 'S3creT')

      expect(loginButton.getAttribute('disabled')).toBeDefined()
    })
  })

  it('logs in and out successfully', function() {
    helper.fillFieldWithText(emailField, process.env.USER_EMAIL)
    helper.fillFieldWithText(passwordField, process.env.USER_PASSWORD)
    helper.click(loginButton)

    helper.waitForElementVisibility(yourNotesHeading)

    helper.click(logoutLink)

    helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}/login`)
  })
})

