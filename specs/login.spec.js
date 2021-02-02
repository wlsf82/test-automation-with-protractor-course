describe('Login', function() {
  it('logs in successfully', function() {
    browser.get('/login')

    const emailField = element(by.id('email'))
    const passwordField = element(by.id('password'))
    const loginButton = element(by.cssContainingText('button[type="submit"]', 'Login'))

    emailField.sendKeys('admin@example.com')
    passwordField.sendKeys('Passw0rd!')
    loginButton.click()
  })
})

