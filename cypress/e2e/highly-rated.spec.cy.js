import common from '../page-objects/common'
describe('Highly Rated', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('GET', '**/review/list?v=2&id=96692540&shelf=read&per_page=60&sort=rating&**').as(
      'highlyRated'
    )
    cy.get('.nav-link').contains('Highly Rated').click()
    cy.wait('@highlyRated')
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
