const helper = require('protractor-helper')

const emailField = element(by.id('email'))
const passwordField = element(by.id('password'))
const loginButton = element(by.cssContainingText('button[type="submit"]', 'Login'))
const yourNotesHeading = element(by.cssContainingText('h1', 'Your Notes'))
const logoutLink = element(by.cssContainingText('.navbar-right a', 'Logout'))

function login(
  email = process.env.USER_EMAIL,
  password = process.env.USER_PASSWORD
) {
  helper.fillFieldWithText(emailField, email)
  helper.fillFieldWithText(passwordField, password)
  helper.click(loginButton)
}

module.exports = {
  emailField,
  passwordField,
  loginButton,
  yourNotesHeading,
  logoutLink,
  login
}
