describe('Stats', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('.nav-link').contains('Stats').click()
  })

  it('Should load the nav, table and footer', () => {
    cy.wait(5000)
    cy.get('.App>').children().should('have.length', 4)
  })

  it('Table should have correct row labels', () => {
    cy.wait(5000)
    cy.get('.statsContainer>table>tbody').first().children().should('have.length', 5).should('be.visible')
    cy.get('.statsContainer>table>tbody>tr:first').contains('Total Books')
    cy.get('.statsContainer>table>tbody>tr:first').next().contains('Total Pages')
    cy.get('.statsContainer>table>tbody>tr:first').next().next().contains('Average Pages')
    cy.get('.statsContainer>table>tbody>tr:first').next().next().next().contains('Shortest Book')
    cy.get('.statsContainer>table>tbody>tr:first').next().next().next().next().contains('Longest Book')
  })
})
