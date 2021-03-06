describe('Recently Read', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should load the cards', () => {
    cy.wait(5000)
    cy.get('.booksContainer>ul').children().should('have.length', 60)
  })

  it('Book cards should load correcly', () => {
    cy.wait(5000)
    cy.get('.bookCard').first().children().should('have.length', 2).should('be.visible')
    cy.get('.bookCard>.cardContainer').first().children().should('have.length', 4).should('be.visible')
  })
})
