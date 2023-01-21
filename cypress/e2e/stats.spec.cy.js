import common from '../page-objects/common'

describe('Stats', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.intercept('GET', '**/review/list?v=2&id=96692540&shelf=read&sort=date_read&**').as('stats')
    cy.get('.nav-link').contains('Stats').click()
    cy.wait('@stats')
  })

  it('Should load the nav, tables and footer', () => {
    common.loadingGoodReads()
    cy.get('.App>').children().should('have.length', 7)
  })

  it('Table should have correct row labels', () => {
    common.loadingGoodReads()
    cy.get('.statsContainer>table>tbody').first().children().should('have.length', 5).should('be.visible')
    cy.get('.statsContainer>table>tbody>tr:first').contains('Total Books')
    cy.get('.statsContainer>table>tbody>tr:first').next().contains('Total Pages')
    cy.get('.statsContainer>table>tbody>tr:first').next().next().contains('Average Pages')
    cy.get('.statsContainer>table>tbody>tr:first').next().next().next().contains('Shortest Book')
    cy.get('.statsContainer>table>tbody>tr:first').next().next().next().next().contains('Longest Book')
  })
})
