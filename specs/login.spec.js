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

  describe('Erros', () => {
    it('fails when trying to login with an invalid password', () => {
      login(process.env.USER_EMAIL, 'invalid-password')

      helper.waitForAlertToBePresent()

      const alertDialog = browser.switchTo().alert()

      expect(alertDialog.getText()).toEqual('Incorrect username or password.')

      alertDialog.accept()
    })

    it('fails when trying to login with an unnexistent user', () => {
      login('invalid-user@example.com', 'some-password')

      helper.waitForAlertToBePresent()

      const alertDialog = browser.switchTo().alert()

      expect(alertDialog.getText()).toEqual('User does not exist.')

      alertDialog.accept()
    })
  })

  it('logs in and out successfully', function() {
    login()
    helper.waitForElementVisibility(yourNotesHeading)

    helper.click(logoutLink)

    helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}/login`)
  })

  function login(
    email = process.env.USER_EMAIL,
    password = process.env.USER_PASSWORD
  ) {
    helper.fillFieldWithText(emailField, email)
    helper.fillFieldWithText(passwordField, password)
    helper.click(loginButton)
  }
})

