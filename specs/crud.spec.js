const faker = require('faker')
const helper = require('protractor-helper')
const page = require('../page-objects')

describe('CRUD operations', () => {
  beforeEach(() => {
    browser.get('login')
    page.login()
    helper.click(page.createNewNoteLink)
  })

  it('successfully CRUD a note', () => {
    const note = {
      initialContent: faker.random.words(5),
      updatedContent: faker.random.words(6),
      attachFileOnCreation: true
    }

    page.createNote(note)

    helper.waitForTextToBePresentInElement(page.notes, note.initialContent)

    page.openNote(note.initialContent)
    page.editNote(note)

    helper.waitForTextNotToBePresentInElement(page.notes, note.initialContent)
    helper.waitForTextToBePresentInElement(page.notes, note.updatedContent)

    page.openNote(note.updatedContent)
    page.deleteNote()

    helper.waitForTextNotToBePresentInElement(page.notes, note.updatedContent)

    helper.click(page.logoutLink)
    helper.waitForElementVisibility(page.loginLink)
  })
})
