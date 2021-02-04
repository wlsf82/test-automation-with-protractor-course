const helper = require('protractor-helper')
const path = require("path")
const absolutePathOfSampleFile = path.resolve(__dirname, '../assets/sample.png')

const emailField = element(by.id('email'))
const passwordField = element(by.id('password'))
const loginButton = element(by.cssContainingText('button[type="submit"]', 'Login'))
const yourNotesHeading = element(by.cssContainingText('h1', 'Your Notes'))
const loginLink = element(by.cssContainingText('.navbar-right a', 'Login'))
const logoutLink = element(by.cssContainingText('.navbar-right a', 'Logout'))
const createNewNoteLink = element(by.css('.list-group [href="/notes/new"]'))
const textArea = element(by.id('content'))
const fileInput = element(by.id('file'))
const createButton = element(by.cssContainingText('button[type="submit"]', 'Create'))
const saveButton = element(by.cssContainingText('button[type="submit"]', 'Save'))
const deleteButton = element(by.cssContainingText('.btn-danger', 'Delete'))
const notes = element(by.className('list-group'))

function login(
  email = process.env.USER_EMAIL,
  password = process.env.USER_PASSWORD
) {
  helper.fillFieldWithText(emailField, email)
  helper.fillFieldWithText(passwordField, password)
  helper.click(loginButton)
}

function createNote(note) {
  helper.fillFieldWithText(textArea, note.initialContent)

  if (note.attachFileOnCreation) {
    helper.uploadFileIntoInputField(fileInput, absolutePathOfSampleFile)
  }

  helper.click(createButton)
}

function openNote(note) {
  const noteToOpen = element(by.cssContainingText('.list-group-item', note))
  helper.click(noteToOpen)
}

function editNote(note) {
  helper.clearFieldAndFillItWithText(textArea, note.updatedContent)
  helper.click(saveButton)
}

function deleteNote() {
  helper.click(deleteButton)
  helper.waitForAlertToBePresent()

  const alertDialog = browser.switchTo().alert()
  expect(alertDialog.getText()).toEqual('Are you sure you want to delete this note?')
  alertDialog.accept()
}

module.exports = {
  emailField,
  passwordField,
  loginButton,
  yourNotesHeading,
  loginLink,
  logoutLink,
  createNewNoteLink,
  notes,
  login,
  createNote,
  openNote,
  editNote,
  deleteNote
}
