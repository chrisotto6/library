import common from '../page-objects/common'

describe('To Read', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('GET', '**/review/list?v=2&id=96692540&shelf=to-read&sort=avg_rating&**').as('toRead')
    cy.get('.nav-link').contains('To Read').click()
    cy.wait('@toRead')
  })

  it('Should load the cards', () => {
    common.loadingGoodReads()
    cy.get('.booksContainer>ul').children().should('have.length', 60)
  })

  it('Book cards should load correcly', () => {
    common.loadingGoodReads()
    cy.get('.bookCard').first().children().should('have.length', 2).should('be.visible')
    cy.get('.bookCard>.cardContainer').first().children().should('have.length', 4).should('be.visible')
  })
})
