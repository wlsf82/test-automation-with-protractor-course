const EC = protractor.ExpectedConditions;

describe('Login', function() {
  it('logs in successfully', function() {
    browser.get('/login')

    const emailField = element(by.id('email'))
    const passwordField = element(by.id('password'))
    const loginButton = element(by.cssContainingText('button[type="submit"]', 'Login'))
    const yourNotesHeading = element(by.cssContainingText('h1', 'Your Notes'))

    emailField.sendKeys('admin@example.com')
    passwordField.sendKeys('Passw0rd!')
    loginButton.click()

    browser.wait(EC.visibilityOf(yourNotesHeading), 5000)

    expect(yourNotesHeading.isDisplayed()).toBe(true)
  })
})

