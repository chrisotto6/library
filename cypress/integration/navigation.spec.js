describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Recently Read', () => {
    cy.get('.nav-link').contains('Recently Read').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('To Read', () => {
    cy.get('.nav-link').contains('To Read').click()
    cy.url().should('include', 'to-read')
  })

  it('Highly Rated', () => {
    cy.get('.nav-link').contains('Highly Rated').click()
    cy.url().should('include', 'highly-rated')
  })

  it('To Read', () => {
    cy.get('.nav-link').contains('Stats').click()
    cy.url().should('include', 'stats')
  })
})
