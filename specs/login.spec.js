const helper = require('protractor-helper')
const page = require('../page-objects')

describe('Login', () => {
  beforeEach(() => {
    browser.get('login')
  })

  describe('Login button verifications', () => {
    it('starts disabled', () => {
      helper.waitForElementVisibility(page.loginButton)

      expect(page.loginButton.getAttribute('disabled')).toBeDefined()
    })

    it('is kept disabled when filling only the email field', () => {
      helper.fillFieldWithText(page.emailField, 'test-email@example.com')

      expect(page.loginButton.getAttribute('disabled')).toBeDefined()
    })

    it('is kept disabled when filling only the password field', () => {
      helper.fillFieldWithText(page.passwordField, 'S3creT')

      expect(page.loginButton.getAttribute('disabled')).toBeDefined()
    })
  })

  describe('Errors', () => {
    it('fails when trying to login with an invalid password', () => {
      page.login(process.env.USER_EMAIL, 'invalid-password')

      helper.waitForAlertToBePresent()

      const alertDialog = browser.switchTo().alert()

      expect(alertDialog.getText()).toEqual('Incorrect username or password.')

      alertDialog.accept()
    })

    it('fails when trying to login with an unnexistent user', () => {
      page.login('invalid-user@example.com', 'some-password')

      helper.waitForAlertToBePresent()

      const alertDialog = browser.switchTo().alert()

      expect(alertDialog.getText()).toEqual('User does not exist.')

      alertDialog.accept()
    })
  })

  it('logs in and out successfully', () => {
    page.login()

    helper.waitForElementVisibility(page.yourNotesHeading)

    helper.click(page.logoutLink)

    helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}/login`)
  })
})

